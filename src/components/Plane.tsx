'use client'
import { Edges } from '@react-three/drei'
import * as THREE from 'three'
import { useBox } from '@react-three/cannon'

type PlaneProps = {
  rotation?: [number, number, number]
  position?: [number, number, number]
}

export default function Plane({ rotation = [0, 0, 0], position = [0, 0, 0] }: PlaneProps) {
  const [ref] = useBox<THREE.Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position,
    type: 'Static',
    material: {
      restitution: 0.5,
    },
  }))

  return (
    <>
      <mesh ref={ref} receiveShadow>
        <boxGeometry args={[100, 100, 1]} />
        <meshStandardMaterial color='yellow' />
        <Edges scale={1} color={'black'} />
      </mesh>
    </>
  )
}
