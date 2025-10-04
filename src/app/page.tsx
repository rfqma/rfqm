"use client";

import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  useTexture,
  CameraControls,
} from "@react-three/drei";
import * as THREE from "three";
import Room from "@/components/room";
import { Fragment, useState, useRef, useEffect } from "react";
// import { useHelper } from "@react-three/drei";
// import { useRef } from "react";
import Audio from "@/components/audio";
import Welcome from "@/components/welcome";

function Lights() {
  const goboTexture = useTexture("/gobo.webp");
  // const spotLightRef = useRef<THREE.SpotLight>(null!);

  // useHelper(spotLightRef, THREE.SpotLightHelper, "cyan");

  return (
    <Fragment>
      <spotLight
        map={goboTexture}
        color="#ffaa66"
        intensity={2000}
        angle={0.4}
        penumbra={0.5}
        position={[20, 20, -60]}
        castShadow
        shadow-bias={-0.0001}
      />

      <ambientLight intensity={0.05} />

      <pointLight
        color="#4488ff"
        intensity={20}
        distance={8}
        position={[-2.5, 3.5, 2]}
      />

      <spotLight
        color="#ffffff"
        intensity={50}
        distance={20}
        position={[-14, 10, -4]}
        castShadow
        angle={1000}
        shadow-bias={-0.0001}
      />

      <spotLight
        // ref={spotLightRef}
        color="#F54927"
        intensity={2000}
        distance={50}
        position={[-3, 50, -20]}
        castShadow
        angle={1000}
        shadow-bias={-0.0001}
      />
    </Fragment>
  );
}

export default function Home() {
  const [isDesktopView, setDesktopView] = useState<boolean>(false);
  const [isEntered, setEntered] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null!);
  const cameraControlsRef = useRef<CameraControls>(null!);

  useEffect(() => {
    if (cameraControlsRef.current) {
      if (isDesktopView) {
        cameraControlsRef.current.setLookAt(
          -3,
          10,
          0,
          -78.785,
          0,
          -22.837,
          true,
        );
      } else {
        cameraControlsRef.current.setLookAt(50, 50, 50, 0, 0, 0, true);
      }
    }
  }, [isDesktopView]);

  const handleEnter = () => {
    setEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    }
  };

  return (
    <main className="w-full h-screen bg-gray-900">
      {!isEntered && <Welcome onEnterAction={handleEnter} />}

      <Audio ref={audioRef} />
      <Canvas
        shadows={{ type: THREE.PCFSoftShadowMap }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
        }}
      >
        <CameraControls ref={cameraControlsRef} enabled={!isDesktopView} />
        <PerspectiveCamera makeDefault position={[50, 50, 50]} fov={50} />
        <Lights />
        <Room
          isDesktopView={isDesktopView}
          onCloseAction={() => setDesktopView(false)}
          onScreenClickAction={() => setDesktopView((prev) => !prev)}
        />
      </Canvas>
    </main>
  );
}
