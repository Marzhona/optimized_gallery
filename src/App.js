import React, { useState, useEffect } from 'react';
import Image from './Image'; // Исправленный путь импорта
import PerformanceData from './PerformanceData';
import { getImages } from './api'; // Исправленное имя функции

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getImages();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
console.log(images)
  return (
    <div className="app">
      <h1>Optimized Photo Gallery</h1>
      <div className="photo-gallery">
        {images.map(image => (
          <Image key={image.id} image={image} />
        ))}
      </div>
      <PerformanceData />
    </div>
  );
};

export default App;