"use client";

import Image from 'next/image';
import { useState } from 'react';
import styles from './carousel.module.css'; 

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={handlePrev}>
        &#10094;
      </button>
      <div className={styles.carouselWrapper}>
        <Image
          src={images[currentIndex]}
          alt={`Carousel Image ${currentIndex + 1}`}
          width= {1700}
          height={850}
          className={styles.carouselImage}
        />
      </div>
      <button className={styles.next} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}
