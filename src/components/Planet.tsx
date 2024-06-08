'use client'

import { Edges } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { DoubleSide, Mesh } from 'three'

type PlanetProps = {
  radius: number
  distance: number
  color: string
  speed: number
}

const Planet: React.FC<PlanetProps> = ({ radius, distance, color, speed }) => {
  const mesh = useRef<Mesh>()

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.x = distance * Math.cos(clock.getElapsedTime() * speed)
      mesh.current.position.z = distance * Math.sin(clock.getElapsedTime() * speed)
    }
  })

  return (
    <>
      <mesh ref={mesh}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[distance, 32, 32]} />
        <meshStandardMaterial transparent={true} opacity={0} />
        <Edges lineWidth={1} color='white' />
      </mesh>
    </>
  )
}

export default Planet
