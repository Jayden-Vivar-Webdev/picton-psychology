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
  const y = Math.sin(t * Math.PI) * 1.1 - 0.2
  return [x, y, 0]
})

const ORB_COLORS = ["#8fb088", "#7aa384", "#d8c9a0", "#6f9a7e", "#9cbf94"]

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
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (glowRef.current) {
      const pulse = 0.9 + Math.sin(clock.elapsedTime * 1.2 + delay) * 0.12
      glowRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
      <group position={position}>
        {/* soft outer glow */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.62, 32, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.18} />
        </mesh>
        {/* core orb */}
        <mesh>
          <sphereGeometry args={[0.4, 48, 48]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.35}
            metalness={0.1}
          />
        </mesh>
        <Html center distanceFactor={11} position={[0, -1.15, 0]}>
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

function PathParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 900

  const { positions, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const offsets = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const t = Math.random()
      const x = (t - 0.5) * 9 + (Math.random() - 0.5) * 0.6
      const y = Math.sin(t * Math.PI) * 1.1 - 0.2 + (Math.random() - 0.5) * 1.3
      const z = (Math.random() - 0.5) * 2.5
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      offsets[i] = Math.random() * Math.PI * 2
    }
    return { positions, offsets }
  }, [])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const t = clock.elapsedTime
    const arr = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(t * 0.5 + offsets[i]) * 0.0015
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y = Math.sin(t * 0.08) * 0.12
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#9cbf94"
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
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
    const pts = curve.getPoints(80)
    return new THREE.BufferGeometry().setFromPoints(pts)
  }, [curve])

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "#b7cdab", transparent: true, opacity: 0.4 }))} />
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[0, 3, 5]} intensity={40} color="#fdf6e3" />
      <pointLight position={[-5, -2, 3]} intensity={15} color="#8fb088" />
      <ConnectingPath />
      <PathParticles />
      {STEPS.map((step, i) => (
        <StepOrb
          key={step.label}
          position={STEP_POSITIONS[i]}
          color={ORB_COLORS[i]}
          label={step.label}
          description={step.description}
          delay={i * 0.8}
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
