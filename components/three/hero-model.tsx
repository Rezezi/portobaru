"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Mesh, MeshStandardMaterial, Color } from "three"

export default function HeroModel() {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group>
      {/* Main torus knot */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial 
          color="#3498db"
          metalness={0.7}
          roughness={0.2}
          emissive={new Color("#1a5f89")}
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Inner ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 32, 100]} />
        <meshStandardMaterial
          color="#2980b9"
          metalness={0.9}
          roughness={0.1}
          emissive={new Color("#1a5f89")}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Outer ring */}
      <mesh rotation={[0, Math.PI / 4, Math.PI / 2]}>
        <torusGeometry args={[1.8, 0.05, 32, 100]} />
        <meshStandardMaterial
          color="#2980b9"
          metalness={0.9}
          roughness={0.1}
          emissive={new Color("#1a5f89")}
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  )
}