'use client'
type SunProps = {
  size?: [number, number, number]
  position?: [number, number, number]
}

export default function Sun({ size = [2, 32, 32], position = [0, 0, 0] }: SunProps) {
  return (
    <>
      <mesh position={position}>
        <sphereGeometry args={size} />
        <meshStandardMaterial emissive='yellow' />
      </mesh>
    </>
  )
}
