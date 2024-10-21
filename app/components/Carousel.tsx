// components/Carousel.tsx
"use client";


import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface CarouselProps {
  images: string[];
  onClose: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, onClose }) => {
  const sliderRef = useRef<Slider | null>(null); // Referencia al slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Manejador de clic para cambiar de imagen
  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget; // Obtenemos el elemento del contenedor de la imagen
    const clickPosition = event.clientX - target.getBoundingClientRect().left; // Calculamos la posición del clic
    const halfWidth = target.offsetWidth / 2;

    // Cambia a la siguiente o anterior imagen según la posición del clic
    if (sliderRef.current) {
      if (clickPosition < halfWidth) {
        sliderRef.current.slickPrev(); // Cambiar a la imagen anterior
      } else {
        sliderRef.current.slickNext(); // Cambiar a la siguiente imagen
      }
    }
  };

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (carouselRef.current && !carouselRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div 
        ref={carouselRef} 
        className="bg-white p-4 rounded shadow-lg max-w-3xl w-full"
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, index) => (
            <div 
              key={index} 
              className="flex justify-center cursor-pointer" 
              onClick={handleImageClick} // Detectar clic en el contenedor de la imagen
            >
              <Image 
                src={src} 
                alt={`Imagen ${index + 1}`} 
                width={800}  
                height={450} 
                style={{ objectFit: "contain" }} 
              />
            </div>
          ))}
        </Slider>
        <button 
          onClick={onClose} 
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Carousel;
