import { useEffect, useState } from "react";

const NUM_CLOUDS = 30; // Número de nubes a crear

// Función para generar nubes con propiedades aleatorias
const getRandomCloud = () => {
  const width = Math.random() * 50 + 20; // Ancho aleatorio entre 20px y 70px
  const height = Math.random() * 20 + 10; // Altura aleatoria entre 10px y 30px
  return {
    top: `${Math.random() * 20}vh`, // Altura aleatoria entre 0% y 20% de la ventana
    left: `-100px`, // Comienza fuera de la pantalla a la izquierda
    width, // Ancho definido
    height, // Altura definida
    speed: Math.random() * 0.5 + 0.5, // Velocidad aleatoria entre 0.5 y 1.7
  };
};

const Clouds = () => {
  const [clouds, setClouds] = useState<
    {
      top: string;
      left: string;
      width: number;
      height: number;
      speed: number;
    }[]
  >([]);

  useEffect(() => {
    const initialClouds = Array.from({ length: NUM_CLOUDS }, getRandomCloud);
    setClouds(initialClouds);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setClouds((prevClouds) => {
        return prevClouds.map((cloud) => {
          const currentLeft = parseFloat(cloud.left);
          const newLeft = currentLeft + cloud.speed; // Usa la velocidad definida

          // Si la nube se ha movido completamente a la derecha, reinicia su posición
          if (newLeft > window.innerWidth) {
            return getRandomCloud(); // Regresa a la posición inicial
          }

          return {
            ...cloud,
            left: `${newLeft}px`, // Actualiza la posición
          };
        });
      });
    }, 100); // Intervalo de actualización

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-20 overflow-hidden z-5">
      {" "}
      {/* Ajusta la z-index a 50 */}
      {clouds.map((cloud, index) => {
        const animationDelay = `${index * 0.5}s`; // Retraso basado en el índice

        return (
          <div
            key={index}
            className="rounded-full bg-white opacity-50 shadow-md" // Añadir sombra para un efecto más bonito
            style={{
              ...cloud,
              position: "absolute", // Asegura que las nubes se posicionen correctamente
              animation: `cloud-move ${10 / cloud.speed}s linear infinite`,
              animationDelay: animationDelay, // Retraso para que cada nube tenga un tiempo diferente
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes cloud-move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100vw);
          }
        }
      `}</style>
    </div>
  );
};

export default Clouds;
