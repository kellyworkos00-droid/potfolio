"use client";

import * as THREE from "three";
import { memo, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, createPortal, useFrame, useThree, type ThreeElements } from "@react-three/fiber";
import { Image, MeshTransmissionMaterial, Preload, Scroll, ScrollControls, Text, useFBO, useScroll } from "@react-three/drei";
import { easing } from "maath";

type Mode = "lens" | "bar" | "cube";

type NavItem = {
  label: string;
  link: string;
};

type ModeProps = Record<string, unknown>;

type FluidGlassProps = {
  mode?: Mode;
  lensProps?: ModeProps;
  barProps?: ModeProps;
  cubeProps?: ModeProps;
};

type ModeWrapperProps = ThreeElements["mesh"] & {
  children?: ReactNode;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
  geometry: ReactNode;
};

type ZoomMaterial = THREE.Material & { zoom?: number };

type ZoomMesh = THREE.Mesh<THREE.BufferGeometry, ZoomMaterial>;

type ZoomGroup = THREE.Group & { children: ZoomMesh[] };

export default function FluidGlass({ mode = "lens", lensProps = {}, barProps = {}, cubeProps = {} }: FluidGlassProps) {
  const Wrapper = mode === "bar" ? Bar : mode === "cube" ? Cube : Lens;
  const rawOverrides = mode === "bar" ? barProps : mode === "cube" ? cubeProps : lensProps;

  const { navItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "#services-glass" },
    { label: "Contact", link: "/contact" },
  ], ...modeProps } = rawOverrides as ModeProps & { navItems?: NavItem[] };

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true, antialias: true }}>
      <color attach="background" args={["#050505"]} />
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === "bar" && <NavItems items={navItems} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload all />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  geometry,
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null);
  const buffer = useFBO();
  const { viewport } = useThree();
  const [scene] = useState(() => new THREE.Scene());

  useFrame((state, delta) => {
    const { gl, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    if (!ref.current) return;

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;

    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    const configuredScale = (modeProps.scale as number | undefined) ?? null;
    if (configuredScale == null) {
      ref.current.scale.setScalar(Math.min(0.18, v.width * 0.08));
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0x050505, 1);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh ref={ref} scale={scale ?? 0.18} rotation-x={Math.PI / 2} {...props}>
        {geometry}
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.12}
          thickness={thickness ?? 4.2}
          anisotropy={anisotropy ?? 0.02}
          chromaticAberration={chromaticAberration ?? 0.08}
          distortion={0.15}
          distortionScale={0.5}
          temporalDistortion={0.1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...props }: { modeProps?: ModeProps } & ThreeElements["mesh"]) {
  return <ModeWrapper geometry={<cylinderGeometry args={[1.2, 1.2, 0.42, 72]} />} followPointer modeProps={modeProps} {...props} />;
}

function Cube({ modeProps, ...props }: { modeProps?: ModeProps } & ThreeElements["mesh"]) {
  return <ModeWrapper geometry={<boxGeometry args={[1.6, 1.6, 1.6]} />} followPointer modeProps={modeProps} {...props} />;
}

function Bar({ modeProps = {}, ...props }: { modeProps?: ModeProps } & ThreeElements["mesh"]) {
  const defaults = {
    transmission: 1,
    roughness: 0,
    thickness: 8,
    ior: 1.14,
    color: "#f7f7f7",
    attenuationColor: "#ff7a3a",
    attenuationDistance: 0.5,
  };

  return (
    <ModeWrapper
      geometry={<boxGeometry args={[3.8, 0.6, 0.6]} />}
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaults, ...modeProps }}
      {...props}
    />
  );
}

function NavItems({ items }: { items: NavItem[] }) {
  const group = useRef<THREE.Group>(null);
  const { viewport, camera } = useThree();
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const pick = () => {
      const width = window.innerWidth;
      setDevice(width <= 639 ? "mobile" : width <= 1023 ? "tablet" : "desktop");
    };

    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  const metrics = {
    mobile: { spacing: 0.22, fontSize: 0.035 },
    tablet: { spacing: 0.26, fontSize: 0.044 },
    desktop: { spacing: 0.3, fontSize: 0.048 },
  }[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.25, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * metrics.spacing;
    });
  });

  const navigate = (link: string) => {
    if (!link) return;
    if (link.startsWith("#")) {
      const target = document.querySelector(link);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.assign(link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={metrics.fontSize}
          color="#f7f7f7"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          renderOrder={10}
          onClick={(event) => {
            event.stopPropagation();
            navigate(link);
          }}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "auto";
          }}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef<ZoomGroup>(null);
  const data = useScroll();
  const { height } = useThree((state) => state.viewport);

  useFrame(() => {
    if (!group.current) return;
    const items = group.current.children;
    if (items.length < 5) return;

    items[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    items[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    items[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    items[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    items[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1]} url="/images/etana-home.png" alt="Etana project preview" />
      <Image position={[2, 0, 3]} scale={3} url="/images/eterna-home.png" alt="Eterna project preview" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3]} url="/images/sali-home.png" alt="Sali project preview" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2]} url="/images/etana-home.png" alt="Etana close-up" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/images/eterna-home.png" alt="Eterna close-up" />
    </group>
  );
}

function Typography() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const pick = () => {
      const width = window.innerWidth;
      setDevice(width <= 639 ? "mobile" : width <= 1023 ? "tablet" : "desktop");
    };

    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  const fontSize = useMemo(() => {
    if (device === "mobile") return 0.2;
    if (device === "tablet") return 0.4;
    return 0.58;
  }, [device]);

  return (
    <Text
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="#f7f7f7"
      anchorX="center"
      anchorY="middle"
    >
      Premium Motion
    </Text>
  );
}
