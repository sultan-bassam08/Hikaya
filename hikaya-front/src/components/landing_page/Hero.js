import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);
  const contentDivRef = useRef(null);
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false); // Track preload status

  const pcSource = "pcv/";
  const pcNumImages = 141;
  const numImages = pcNumImages;
  const imageHeight = numImages * 6;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (contentDivRef.current) {
      contentDivRef.current.style.height = numImages * 6 + "px";
      contentDivRef.current.style.paddingTop = numImages * 6 + "px";
    }

    // Preloading images
    let preloadedImages = [];
    let imagesLoaded = 0;

    const preloadImages = () => {
      for (let i = 0; i < numImages; i++) {
        const img = new Image();
        const imageUrl = `${pcSource}19-8-23-3-12-2024_pcv1-${pad(
          i + 1,
          4
        )}.jpg`;

        img.src = imageUrl;
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === numImages && !allImagesPreloaded) {
            setAllImagesPreloaded(true); // Set to true when all images are loaded
            console.log("All images preloaded");
            setPreloadedImages((prevImages) => [...prevImages, img]);
          }
        };
        img.onerror = (err) => {
          console.error(`Failed to load image: ${imageUrl}`, err);
        };
        preloadedImages.push(img);
      }
    };

    const pad = (num, size) => {
      let s = num + "";
      while (s.length < size) s = "0" + s;
      return s;
    };

    preloadImages();

    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const imageIndex = Math.floor(scrollTop / (imageHeight / numImages));

      if (imageIndex >= numImages) {
        return;
      }

      const img = preloadedImages[imageIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        console.log(`Drawing image at index ${imageIndex}: ${img.src}`);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      } else {
        console.error(
          `Image at index ${imageIndex} is not ready or failed to load`
        );
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [numImages, preloadedImages, allImagesPreloaded]); // Add allImagesPreloaded to the dependency array

  return (
    <>
      <div id="canvas-bg">
        <div className="image-container-pv1">
          <canvas id="image-sequence-pv1" ref={canvasRef}></canvas>
          <div id="content-pv1" ref={contentDivRef}></div>
        </div>
      </div>

      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Welcome to Hikaya</h1>
          <p>Your platform for discovering amazing stories.</p>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
