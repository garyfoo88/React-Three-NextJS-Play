'use client'

import Ball from '@/components/Ball'
import Plane from '@/components/Plane'
import Planet from '@/components/Planet'
import Sun from '@/components/Sun'
import { Debug, Physics } from '@react-three/cannon'
import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <>
      <Canvas style={{ background: 'black' }} shadows camera={{ position: [5, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Radius = radius of the view */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={5} />
        <Sun />
        <Planet radius={0.5} distance={5} color='blue' speed={0.5} />
        <Planet radius={0.4} distance={8} color='red' speed={0.3} />
        <Planet radius={0.7} distance={12} color='green' speed={0.2} />
        <OrbitControls />
      </Canvas>
    </>
  )
}
