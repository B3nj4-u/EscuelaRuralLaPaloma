"use client"

import { useEffect, useState } from "react"

const NUM_CLOUDS = 20 // Número de nubes a crear

// Función para generar nubes con propiedades aleatorias
const getRandomCloud = (index: number) => {
  const width = Math.random() * 50 + 20 // Ancho aleatorio entre 20px y 70px
  const height = Math.random() * 10 + 10 // Altura aleatoria entre 10px y 20px
  return {
    top: `${Math.random() * 8}vh`, // Altura aleatoria entre 0% y 20% de la ventana
    left: `${-width - Math.random() * 100}px`, // Comienza fuera de la pantalla a la izquierda
    width,
    height,
    speed: Math.random() * 0.8 + 0.7, // Velocidad aleatoria entre 0.5 y 1
    delay: index * 0.9, // Retraso basado en el índice
  }
}

const Clouds = () => {
  const [clouds, setClouds] = useState<
    {
      top: string
      left: string
      width: number
      height: number
      speed: number
      delay: number
    }[]
  >([])

  useEffect(() => {
    const initialClouds = Array.from({ length: NUM_CLOUDS }, (_, index) => getRandomCloud(index))
    setClouds(initialClouds)

    const handleResize = () => {
      setClouds((prevClouds) =>
        prevClouds.map((cloud, index) => ({
          ...cloud,
          ...getRandomCloud(index),
        }))
      )
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full h-20 overflow-hidden z-5">
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white opacity-50 shadow-md animate-cloud"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: `${cloud.width}px`,
            height: `${cloud.height}px`,
            animationDuration: `${20 / cloud.speed}s`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes cloud-move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }
        .animate-cloud {
          animation: cloud-move linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Clouds