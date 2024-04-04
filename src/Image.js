import React, { useRef, useEffect } from 'react'; // Импортируем React и хуки
import './Image.css';

const Image = ({ image }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          img.setAttribute('src', src);
          observer.unobserve(img);
        }
      });
    });

    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, [imageRef]);
console.log(image);
  return (
    <div className="image-container">
      <img className="image" ref={imageRef} data-src={image} alt={image.alt} />
      <div className="image-overlay">
        <h3 className="image-title">{image.title}</h3>
      </div>
    </div>
  );
};

export default Image; // Экспортируем компонент Image по умолчанию
