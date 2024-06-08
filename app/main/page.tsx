'use client'

import Ball from '@/components/Ball'
import Plane from '@/components/Plane'
import { Debug, Physics } from '@react-three/cannon'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <>
      <Canvas shadows camera={{ position: [50, 25, 0], fov: 100 }}>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

        <Physics gravity={[0, -9.81, 0]} allowSleep={false}>
          {/* <Debug scale={1} color='red'> */}
          <Plane />
          <Ball />
          {/* </Debug> */}
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
  )
}
