import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, Icosahedron, Torus, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function MovingObjects() {
  const group = useRef()
  
  useFrame((state) => {
    // Subtle mouse follow
    const x = (state.pointer.x * state.viewport.width) / 15
    const y = (state.pointer.y * state.viewport.height) / 15
    
    if (group.current) {
        group.current.rotation.x += 0.001
        group.current.rotation.y += 0.002
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x, 0.05)
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, y, 0.05)
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron args={[1, 0]} position={[-3, 2, -5]}>
          <meshStandardMaterial color="#00ffcc" wireframe transparent opacity={0.15} />
        </Icosahedron>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Torus args={[1.5, 0.2, 16, 50]} position={[4, -2, -6]}>
          <meshStandardMaterial color="#00aaff" wireframe transparent opacity={0.15} />
        </Torus>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <Sphere args={[0.8, 16, 16]} position={[-4, -3, -4]}>
          <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.1} />
        </Sphere>
      </Float>
    </group>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffcc" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00aaff" />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <MovingObjects />
      </Canvas>
    </div>
  )
}
