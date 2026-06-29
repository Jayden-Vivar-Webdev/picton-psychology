"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Html } from "@react-three/drei"
import * as THREE from "three"

const STEPS = [
  { label: "Reach out", description: "Take the first step" },
  { label: "First session", description: "A gentle conversation" },
  { label: "Understanding", description: "Make sense of things" },
  { label: "Growth", description: "Build new strengths" },
  { label: "Wellbeing", description: "Feel like yourself" },
]

// Position each step along a soft sine curve across the scene
const STEP_POSITIONS: [number, number, number][] = STEPS.map((_, i) => {
  const t = i / (STEPS.length - 1)
  const x = (t - 0.5) * 9
  const y = Math.sin(t * Math.PI) * 0.9 - 0.1
  return [x, y, 0]
})

const ORB_COLORS = ["#8fb088", "#7aa384", "#9cbf94", "#6f9a7e", "#a8c79f"]

function StepOrb({
  position,
  color,
  label,
  description,
  delay,
}: {
  position: [number, number, number]
  color: string
  label: string
  description: string
  delay: number
}) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const pulse = 1 + Math.sin(clock.elapsedTime * 0.6 + delay) * 0.06
      ringRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0} floatIntensity={0.35}>
      <group position={position}>
        {/* soft halo ring */}
        <mesh ref={ringRef} position={[0, 0, -0.05]}>
          <circleGeometry args={[0.6, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.12} />
        </mesh>
        {/* core orb */}
        <mesh>
          <sphereGeometry args={[0.42, 64, 64]} />
          <meshStandardMaterial
            color={color}
            roughness={0.55}
            metalness={0}
            emissive={color}
            emissiveIntensity={0.12}
          />
        </mesh>
        <Html center distanceFactor={11} position={[0, -1.05, 0]}>
          <div className="pointer-events-none select-none text-center">
            <p className="whitespace-nowrap font-serif text-[15px] font-medium text-foreground">
              {label}
            </p>
            <p className="whitespace-nowrap text-[11px] text-muted-foreground">
              {description}
            </p>
          </div>
        </Html>
      </group>
    </Float>
  )
}

function ConnectingPath() {
  const curve = useMemo(() => {
    const points = STEP_POSITIONS.map(
      (p) => new THREE.Vector3(p[0], p[1], p[2]),
    )
    return new THREE.CatmullRomCurve3(points)
  }, [])

  const geometry = useMemo(() => {
    const pts = curve.getPoints(120)
    return new THREE.BufferGeometry().setFromPoints(pts)
  }, [curve])

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: "#b7cdab",
        transparent: true,
        opacity: 0.45,
      }),
    [],
  )

  const line = useMemo(
    () => new THREE.Line(geometry, material),
    [geometry, material],
  )

  return <primitive object={line} />
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 4, 5]} intensity={1.1} color="#fdf6e3" />
      <directionalLight position={[-4, -1, 2]} intensity={0.4} color="#8fb088" />
      <ConnectingPath />
      {STEPS.map((step, i) => (
        <StepOrb
          key={step.label}
          position={STEP_POSITIONS[i]}
          color={ORB_COLORS[i]}
          label={step.label}
          description={step.description}
          delay={i * 1.1}
        />
      ))}
    </>
  )
}

export default function JourneyScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Scene />
    </Canvas>
  )
}
