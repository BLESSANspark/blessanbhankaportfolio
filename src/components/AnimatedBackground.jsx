import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function MeshScene() {
  const groupRef = useRef()
  const torusRef = useRef()
  const sphereRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = t * 0.1
    torusRef.current.rotation.x = t * 0.5
    torusRef.current.rotation.y = t * 0.2
    sphereRef.current.position.x = Math.sin(t * 0.8) * 0.45
    sphereRef.current.position.y = Math.cos(t * 0.9) * 0.35
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={torusRef} position={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.18, 16, 80]} />
          <meshPhysicalMaterial color="#3B82F6" metalness={0.2} roughness={0.2} transmission={0.3} thickness={0.6} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh ref={sphereRef} position={[0.7, 0.3, -0.2]}>
          <sphereGeometry args={[0.24, 32, 32]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#4c1d95" emissiveIntensity={0.4} />
        </mesh>
      </Float>
      <mesh position={[0, 0, -1.4]}>
        <boxGeometry args={[2.6, 1.6, 0.2]} />
        <meshBasicMaterial color="#050816" transparent opacity={0.65} />
      </mesh>
    </group>
  )
}

const AnimatedBackground = () => {
  const background = useMemo(() => new THREE.Color('#050816'), [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3.6], fov: 45 }} onCreated={({ gl }) => { gl.setClearColor(background) }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} color="#3B82F6" intensity={2.2} />
        <pointLight position={[-2, -1, 1]} color="#8B5CF6" intensity={1.8} />
        <MeshScene />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}

export default AnimatedBackground
