"use client";

import { Fragment, useState, useRef, useEffect, useMemo } from "react";
// import { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  useTexture,
  CameraControls,
} from "@react-three/drei";
// import { useHelper } from "@react-three/drei";
import RoomModelSection from "./room-model.section";
import RoomAudioSection from "./room-audio.section";
import RoomWelcomeSection from "./room-welcome.section";

const Lights = () => {
  const goboTexture = useTexture("/gobo.png");
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
};

const RoomMain = () => {
  const [isDesktopView, setDesktopView] = useState<boolean>(false);
  const [isEntered, setEntered] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null!);
  const cameraControlsRef = useRef<CameraControls>(null!);

  const isMobile = useMemo(() => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  }, []);

  useEffect(() => {
    if (cameraControlsRef.current) {
      if (isDesktopView) {
        if (isMobile) {
          cameraControlsRef.current.setLookAt(
            7,
            10,
            2.2,
            -78.785,
            0,
            -22.837,
            true,
          );
        } else {
          cameraControlsRef.current.setLookAt(
            -3,
            10,
            0,
            -78.785,
            0,
            -22.837,
            true,
          );
        }
      } else {
        cameraControlsRef.current.setLookAt(50, 50, 50, 0, 0, 0, true);
      }
    }
  }, [isDesktopView, isMobile]);

  const handleEnter = () => {
    setEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    }
  };

  return (
    <main className="w-full h-screen bg-gray-950">
      {!isEntered && <RoomWelcomeSection onEnterAction={handleEnter} />}

      <RoomAudioSection ref={audioRef} />
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
        <RoomModelSection
          isDesktopView={isDesktopView}
          isMobile={isMobile}
          onCloseAction={() => setDesktopView(false)}
          onScreenClickAction={() => setDesktopView((prev) => !prev)}
        />
      </Canvas>
    </main>
  );
};

export default RoomMain;
