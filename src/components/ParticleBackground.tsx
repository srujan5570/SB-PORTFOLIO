import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function SoftParticles() {
  const count = 1200
  const meshRef = useRef<THREE.Points>(null!)
  const mouse = useRef(new THREE.Vector2(0, 0))
  const target = useRef(new THREE.Vector2(0, 0))

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const spread = 20
    for (let i = 0; i < count; i++) {
      const r = spread * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return geo
  }, [])

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1
      target.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouse)
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  useFrame((state) => {
    const time = state.clock.elapsedTime
    mouse.current.x += (target.current.x - mouse.current.x) * 0.03
    mouse.current.y += (target.current.y - mouse.current.y) * 0.03

    const p = geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const x = p[i3]
      const y = p[i3 + 1]
      const z = p[i3 + 2]
      const r = Math.sqrt(x * x + y * y + z * z)
      const theta = Math.atan2(y, x) + 0.0003
      const phi = Math.acos(z / Math.max(r, 0.001)) + 0.0001
      const wave = Math.sin(time * 0.08 + i * 0.002) * 0.15
      p[i3] = r * Math.sin(phi + wave) * Math.cos(theta + time * 0.005)
      p[i3 + 1] = r * Math.sin(phi + wave) * Math.sin(theta + time * 0.005)
      p[i3 + 2] = r * Math.cos(phi + wave)
    }
    geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y = time * 0.008 + mouse.current.x * 0.05
    meshRef.current.rotation.x = mouse.current.y * 0.05
  })

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        color="#5577ff"
        transparent
        opacity={0.25}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

function SubtleGlow() {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    meshRef.current.rotation.x = t * 0.05
    meshRef.current.rotation.y = t * 0.08
    meshRef.current.position.y = Math.sin(t * 0.15) * 0.3
  })

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} scale={0.6}>
        <torusKnotGeometry args={[1.5, 0.4, 120, 16]} />
        <MeshDistortMaterial
          color="#3344aa"
          emissive="#2222aa"
          emissiveIntensity={0.15}
          roughness={0.4}
          metalness={0.3}
          distort={0.05}
          speed={1}
          transparent
          opacity={0.08}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <SoftParticles />
      <SubtleGlow />
      <ambientLight intensity={0.1} />
    </>
  )
}

export default function ParticleBackground() {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}>
        <Canvas camera={{ position: [0, 0, 14], fov: 65 }}>
          <Scene />
        </Canvas>
      </div>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,31,0.4) 100%)',
      }} />
    </>
  )
}
