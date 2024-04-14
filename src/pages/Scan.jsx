import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useSyncExternalStore,
} from "react";
import * as THREE from "three";

import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/MyContext";
import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";
import Loader from "../components/Loader";

const Scan = () => {
  const navigate = useNavigate();
  let { projectid } = useParams();
  const { imgPreview, fetchProjectById, isProjectGet, singleProject } =
    useContext(UserContext);
  const [isAllow, setIsAllow] = useState(false);
  const [isTargetDetected, setIsTargetDetected] = useState(false);
  const containerRef = useRef(null);
  const start = async () => {
    try {
      if (
        !singleProject ||
        !singleProject.targetMind ||
        !singleProject.targetMind.url ||
        !singleProject?.content ||
        !singleProject?.content?.url ||
        !singleProject?.width ||
        !singleProject?.height
      ) {
        console.error("Target URL is not defined in singleProject");
        return;
      }

      let maxWidth = 1920;
      let maxHeight = 1080;

      const constraints = {
        video: {
          width: { min: 640, ideal: maxWidth },
          height: { min: 480, ideal: maxHeight },
        },
      };

      // Update constraints based on device's capabilities
      if (navigator.mediaDevices) {
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          devices.forEach((device) => {
            if (device.kind === "videoinput") {
              const capabilities = device.getCapabilities();
              maxWidth = Math.min(
                maxWidth,
                capabilities.width?.max || maxWidth
              );
              maxHeight = Math.min(
                maxHeight,
                capabilities.height?.max || maxHeight
              );
              constraints.video.width.ideal = maxWidth;
              constraints.video.height.ideal = maxHeight;
            }
          });

          console.log("Maximum Supported Width:", maxWidth);
          console.log("Maximum Supported Height:", maxHeight);
        } catch (error) {
          console.error("Error fetching device information:", error);
        }
      } else {
        console.error("navigator.mediaDevices is not supported.");
      }

      // Get user media stream with updated constraints
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      const mindarThree = new MindARThree({
        container: containerRef.current,
        imageTargetSrc: singleProject?.targetMind?.url,
        // imageTargetSrc: b,
        // imageTargetSrc:
        //   "https://res.cloudinary.com/dh9qvkjr1/raw/upload/v1708726830/zdvfelz08zixjnnz1j0h",

        uiScanning: "#scanning",
        filterMinCF: 0.001,
        filterBeta: 0.001,
        missTolerance: 1,
        warmupTolerance: 1,
        video: stream,
      });
      const { renderer, scene, camera } = mindarThree;

      const video = document.createElement("video");
      const response = await fetch(singleProject?.content?.url);
      const blob = await response.blob();
      const dataUrl = URL.createObjectURL(blob);

      video.src = dataUrl;
      // video.src = singleProject?.content?.url;

      video.crossOrigin = "anonymous";
      video.loop = true;
      video.setAttribute("playsinline", "playsinline");
      const texture = new THREE.VideoTexture(video);
      const ratio =
        parseFloat(singleProject?.height).toFixed(2) >=
        parseFloat(singleProject?.width).toFixed(2)
          ? parseFloat(singleProject?.height).toFixed(2) /
            parseFloat(singleProject?.width).toFixed(2)
          : parseFloat(singleProject?.width).toFixed(2) /
            parseFloat(singleProject?.height).toFixed(2);

      const geometry = new THREE.PlaneGeometry(
        1,
        ratio
        // 1280 / 760
      );
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const plane = new THREE.Mesh(geometry, material);

      const anchor = mindarThree.addAnchor(0);
      anchor.group.add(plane);

      anchor.onTargetFound = () => {
        setIsTargetDetected(true);
        video
          .play()
          .catch((error) => console.error("Error playing video:", error));
      };

      anchor.onTargetLost = () => {
        setIsTargetDetected(false);
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
    if (isAllow && singleProject) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(() => {
          start();
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    }
  }, [isAllow, singleProject]);

  const handleAllow = () => {
    setIsAllow(true);
  };
  useEffect(() => {
    const fetchProject = async () => {
      await fetchProjectById(projectid);
    };
    fetchProject();
  }, [projectid]);
  return (
    <div id={`${!isAllow && "scannerWrapper"}`}>
      {isAllow ? (
        <>
          {isProjectGet && <Loader />}
          {/* {!isTargetDetected && (
            <div id="scanning">
              <div class="inner">
                <img src={singleProject?.target?.url} alt="lo" />
                <div class="scanline"></div>
              </div>
            </div>
          )} */}
          <div id="scanning" className="hidden">
            <div class="inner">
              <img src={singleProject?.target?.url} alt="lo" />
              <div class="scanline"></div>
            </div>
            <div className="logoNameScane">
              Artify Powered by
              <br />
              thegodspeedz
            </div>
          </div>
          <div id="container" ref={containerRef}></div>
        </>
      ) : (
        <div>
          <div className="container-fluid">
            <div className="row text-center py-2 scanHeading">
              <p>
                This AR effect was designed with thegodspeedz.com - AR studio.
                Create your effect now for free.
                <button
                  className="btn scanBtn mx-1"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Start Now
                </button>
              </p>
            </div>
            <div className="cameraOpenRequest">
              <div className="requestToOpen">
                <p>please allow camera access for AR effects</p>
                <button
                  onClick={() => {
                    handleAllow();
                  }}
                  className="btn scanBtn"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scan;
