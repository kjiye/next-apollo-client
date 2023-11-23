import { Clone, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import THREE from "three";

interface Props {
  fileUrl: string;
}

export default function ModelView({ fileUrl }: Props) {
  const gltf = useGLTF(fileUrl);
  return (
    <>
      <Canvas
        camera={{
          position: new THREE.Vector3(0, 0, -0.3),
          near: 0.1,
          far: 10,
        }}
      >
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 10, 0]} />
        <Suspense>
          {/* 기타 옵션 추가 */}
          <Clone object={gltf.scene} position={[0, 0, 0]} scale={0.6} />
        </Suspense>
        <OrbitControls enableDamping={true} />
      </Canvas>
    </>
  );
}
