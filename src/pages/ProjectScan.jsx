import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import a from "../imageProcess/a.jpg";
import b from "../imageProcess/targets.mind";
import c from "../imageProcess/cv.mp4";
import { UserContext } from "../context/MyContext";
import { useContext } from "react";

import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";

const ProjectScan = () => {
  const { imgPreview } = useContext(UserContext);
  const [isTargetDetected, setIsTargetDetected] = useState(false);

  const containerRef = useRef(null);
  const start = async () => {
    try {
      const mindarThree = new MindARThree({
        container: containerRef.current,
        imageTargetSrc: b,
        uiScanning: "#scanning",
        filterMinCF: 0.001,
        filterBeta: 0.001,
        missTolerance: 1,
        warmupTolerance: 1,
      });
      const { renderer, scene, camera } = mindarThree;

      const video = document.createElement("video");
      video.src = c;
      video.crossOrigin = "anonymous";
      video.loop = true;
      const texture = new THREE.VideoTexture(video);

      const geometry = new THREE.PlaneGeometry(1, 1280 / 797);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const plane = new THREE.Mesh(geometry, material);

      const anchor = mindarThree.addAnchor(0);
      anchor.group.add(plane);

      anchor.onTargetFound = () => {
        setIsTargetDetected(false);
        video.play();
      };

      anchor.onTargetLost = () => {
        setIsTargetDetected(true);
        video.pause();
      };

      await mindarThree.start();
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    } catch (error) {
      console.error("Error starting MindARThree:", error);
    }
  };
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        start();
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  }, []);
  return (
    <>
      {isTargetDetected && (
        <div id="scanning">
          <div class="inner">
            <img src={a} alt="lo" />
            <div class="scanline"></div>
          </div>
        </div>
      )}
      <div id="container" ref={containerRef}></div>
    </>
  );
};

export default ProjectScan;
