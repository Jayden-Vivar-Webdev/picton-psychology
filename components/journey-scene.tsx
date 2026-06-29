"use client"

import { useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import * as THREE from "three"

const STEPS = [
  { label: "Reach out", description: "Take the first step" },
  { label: "First session", description: "A gentle conversation" },
  { label: "Understanding", description: "Make sense of things" },
  { label: "Growth", description: "Build new strengths" },
  { label: "Wellbeing", description: "Feel like yourself" },
]

const LEAF_COLORS = ["#7aa384", "#8fb088", "#6f9a7e", "#9cbf94", "#85b08a"]

// Position each step along a gentle rising curve across the scene
const STEP_POSITIONS: [number, number, number][] = STEPS.map((_, i) => {
  const t = i / (STEPS.length - 1)
  const x = (t - 0.5) * 9.5
  const y = Math.sin(t * Math.PI - Math.PI / 2) * 1.1 + t * 0.6 - 0.4
  return [x, y, 0]
})

// A single pointed leaf silhouette
function makeLeafShape() {
  const s = new THREE.Shape()
  s.moveTo(0, 0)
  s.quadraticCurveTo(0.11, 0.16, 0.02, 0.4)
  s.quadraticCurveTo(0, 0.44, -0.02, 0.4)
  s.quadraticCurveTo(-0.11, 0.16, 0, 0)
  return s
}

function Leaf({
  angle,
  length,
  color,
  swayOffset,
}: {
  angle: number
  length: number
  color: string
  swayOffset: number
}) {
  const ref = useRef<THREE.Group>(null)
  const geometry = useMemo(() => new THREE.ShapeGeometry(makeLeafShape()), [])

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.elapsedTime
      // gentle flutter around the leaf's base
      ref.current.rotation.z = angle + Math.sin(t * 0.9 + swayOffset) * 0.06
    }
  })

  return (
    <group ref={ref} rotation={[0, 0, angle]}>
      <mesh geometry={geometry} scale={[length, length, length]}>
        <meshStandardMaterial
          color={color}
          roughness={0.7}
          metalness={0}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

function StepNode({
  position,
  color,
  label,
  description,
  index,
  hovered,
  onHover,
}: {
  position: [number, number, number]
  color: string
  label: string
  description: string
  index: number
  hovered: boolean
  onHover: (i: number | null) => void
}) {
  const group = useRef<THREE.Group>(null)
  const scaleRef = useRef(1)

  // Build a deterministic cluster of leaves fanning upward
  const leaves = useMemo(() => {
    const arr: { angle: number; length: number; sway: number }[] = []
    const count = 7
    for (let i = 0; i < count; i++) {
      const spread = (i / (count - 1) - 0.5) * Math.PI * 1.05
      arr.push({
        angle: spread,
        length: 0.85 + ((i * 37) % 30) / 100,
        sway: i * 1.3 + index,
      })
    }
    return arr
  }, [index])

  useFrame(() => {
    if (group.current) {
      const target = hovered ? 1.18 : 1
      scaleRef.current += (target - scaleRef.current) * 0.12
      group.current.scale.setScalar(scaleRef.current)
    }
  })

  return (
    <group position={position}>
      <group
        ref={group}
        onPointerOver={(e) => {
          e.stopPropagation()
          onHover(index)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          onHover(null)
          document.body.style.cursor = "auto"
        }}
      >
        {/* small bud / node core */}
        <mesh>
          <sphereGeometry args={[0.14, 32, 32]} />
          <meshStandardMaterial
            color={color}
            roughness={0.5}
            emissive={color}
            emissiveIntensity={hovered ? 0.5 : 0.15}
          />
        </mesh>
        {/* leaf cluster */}
        {leaves.map((leaf, i) => (
          <Leaf
            key={i}
            angle={leaf.angle}
            length={leaf.length}
            color={color}
            swayOffset={leaf.sway}
          />
        ))}
      </group>

      <Html center distanceFactor={11} position={[0, -0.85, 0]}>
        <div
          className="pointer-events-none select-none text-center transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0.75 }}
        >
          <p
            className="whitespace-nowrap font-serif text-[15px] font-medium transition-colors duration-300"
            style={{ color: hovered ? "var(--primary)" : "var(--foreground)" }}
          >
            {label}
          </p>
          <p className="whitespace-nowrap text-[11px] text-muted-foreground">
            {description}
          </p>
        </div>
      </Html>
    </group>
  )
}

function Branch() {
  const curve = useMemo(() => {
    const points = [
      new THREE.Vector3(-5.6, STEP_POSITIONS[0][1] - 0.5, 0),
      ...STEP_POSITIONS.map((p) => new THREE.Vector3(p[0], p[1] - 0.05, p[2])),
      new THREE.Vector3(5.6, STEP_POSITIONS[4][1] + 0.4, 0),
    ]
    return new THREE.CatmullRomCurve3(points)
  }, [])

  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 120, 0.05, 12, false),
    [curve],
  )

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#9c8466" roughness={0.85} metalness={0} />
    </mesh>
  )
}

function Scene() {
  const [hovered, setHovered] = useState<number | null>(null)
  const swayGroup = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (swayGroup.current) {
      // whole arrangement breathes gently
      swayGroup.current.rotation.z = Math.sin(clock.elapsedTime * 0.25) * 0.015
    }
  })

  return (
    <>
      <ambientLight intensity={0.95} />
      <directionalLight position={[2, 5, 5]} intensity={1.1} color="#fdf6e3" />
      <directionalLight position={[-4, 0, 3]} intensity={0.35} color="#8fb088" />
      <group ref={swayGroup}>
        <Branch />
        {STEPS.map((step, i) => (
          <StepNode
            key={step.label}
            position={STEP_POSITIONS[i]}
            color={LEAF_COLORS[i]}
            label={step.label}
            description={step.description}
            index={i}
            hovered={hovered === i}
            onHover={setHovered}
          />
        ))}
      </group>
    </>
  )
}

export default function JourneyScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 9], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Scene />
    </Canvas>
  )
}
