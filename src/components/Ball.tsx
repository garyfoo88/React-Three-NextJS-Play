'use client'
import { Edges } from '@react-three/drei'
import * as THREE from 'three'
import { useBox, useSphere } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'

type PlaneProps = {
  rotation?: [number, number, number]
  position?: [number, number, number]
}

export default function Ball({ rotation = [0, 0, 0], position = [0, 20, 0] }: PlaneProps) {
  // Controls the physics of the ball e.g. collision detection
  const [ref] = useSphere<THREE.Mesh>(() => ({
    mass: 100,
    position,
    args: [5],
    material: {
      restitution: 2,
    },
  }))

  return (
    <>
      <mesh ref={ref} castShadow>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial color='lightblue' roughness={0.5} metalness={0.5} emissive='white' />
      </mesh>
    </>
  )
}
