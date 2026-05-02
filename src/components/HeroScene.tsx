"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    mouseRef.current.x = pointer.x;
    mouseRef.current.y = pointer.y;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouseRef.current.y * 0.3,
        0.05,
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouseRef.current.x * 0.3,
        0.05,
      );
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        mouseRef.current.x * viewport.width * 0.04,
        0.03,
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        mouseRef.current.y * viewport.height * 0.04,
        0.03,
      );
    }
  });

  const color = useMemo(() => new THREE.Color("#22c55e"), []);

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.6}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.25}
          metalness={0.8}
          distort={0.15}
          speed={1.5}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function SmallOrb({
  position,
  color,
  scale,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(clock.elapsedTime * 0.8 + position[0]) * 0.3;
    }
  });
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color={color}
        roughness={0.6}
        metalness={0.3}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} color={0xffffff} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color={0xffffff}
        />
        <directionalLight
          position={[-3, -2, 4]}
          intensity={0.35}
          color={"#16a34a"}
        />
        <pointLight position={[0, 3, 3]} intensity={0.45} color={"#22c55e"} />
        <FloatingShape />
        <SmallOrb position={[-2.5, 1.5, -1]} color={"#f8fafc"} scale={0.15} />
        <SmallOrb position={[2.2, -1.8, -0.5]} color={"#22c55e"} scale={0.1} />
        <SmallOrb position={[1.8, 2, -1.5]} color={"#16a34a"} scale={0.08} />
      </Canvas>
    </div>
  );
}
