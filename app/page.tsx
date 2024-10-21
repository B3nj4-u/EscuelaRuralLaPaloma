"use client";

import { useState } from "react";
import Image from "next/image";
import { Book, Users, Calendar } from "lucide-react";
import { Architects_Daughter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Head from "next/head";
import WaveSvg from "./components/WaveSvg"; // Ajusta la ruta según tu estructura de carpetas

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const handleCardClick = (type: string) => {
    const newImages =
      type === "Aulas"
        ? Array.from({ length: 5 }, (_, i) => `/images/Aulas${i + 1}.jpg`)
        : Array.from({ length: 4 }, (_, i) => `/images/Areas${i + 1}.jpg`);

    setImages(newImages);
    setIsCarouselVisible(true);
  };
  return (
    <div className="min-h-screen bg-cream-paper text-green-900 font-handwritten">
      <Head>
        <title>Escuela Rural La Paloma</title>
        <meta
          name="description"
          content="Sitio web informativo de Escuela Rural La Paloma"
        />
        <link rel="icon" href="/favicon.ico" />{" "}
        {/* Asegúrate de que la ruta sea correcta */}
      </Head>
      <Header currentPage="inicio" />
      <main>
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
          <Image
            src="/images/banner.png"
            alt="Escuela Rural La Paloma"
            fill // Cambia 'layout="fill"' por 'fill'
            style={{ objectFit: "cover" }} // Usa 'style' para definir 'objectFit'
            className="brightness-110"
            priority // Agrega priority si es una imagen importante
          />

          <div className="absolute inset-0 flex flex-col items-center justify-between">
            <div className="w-full flex justify-between items-start p-4 sm:p-6 md:p-8">
              <div className="flex space-x-4"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
              <h2
                className={`${architectsDaughter.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight shadow-text`}
              >
                Bienvenidos a nuestra
              </h2>
              <h2
                className={`${architectsDaughter.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight shadow-text mt-2`}
              >
                Escuela Rural La Paloma
              </h2>
            </div>

            <WaveSvg />
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 sm:mb-8 text-center">
            Nuestra Escuela
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            En la Escuela Rural La Paloma, creemos en el poder de la
            educaci&oacute;n para transformar vidas. Rodeados de naturaleza y
            con un equipo docente comprometido, nuestros alumnos crecen,
            aprenden y se desarrollan en un ambiente acogedor y familiar.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Book,
                title: "Aprendizaje Integral",
                desc: "Combinamos el currículo con experiencias prácticas en la naturaleza.",
              },
              {
                icon: Users,
                title: "Ambiente Familiar",
                desc: "Grupos pequeños que permiten atención personalizada a cada alumno.",
              },
              {
                icon: Calendar,
                title: "Actividades Especiales",
                desc: "Competencias de Debate, Actos Musicales y Excursiones que enriquecen el aprendizaje.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-t-4 border-green-600 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-center text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-notebook-paper py-8 sm:py-16 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 sm:mb-8 text-center">
              Nuestras Instalaciones
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Aulas Acogedoras",
                  desc: "Espacios luminosos y cómodos para nuestros pequeños estudiantes.",
                  type: "Aulas",
                  image: "/images/Aulas1.jpg", // Ruta de la imagen para Aulas
                },
                {
                  title: "Áreas Verdes",
                  desc: "Amplios espacios al aire libre para jugar y conectar con la naturaleza.",
                  type: "Areas",
                  image: "/images/Areas1.jpg", // Ruta de la imagen para Areas
                },
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(item.type)}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300 cursor-pointer"
                >
                  <div className="relative h-40 sm:h-48 mb-4 overflow-hidden rounded">
                    <Image
                      src={item.image} // Usa la ruta de la imagen correcta
                      alt={item.title}
                      fill // Cambia 'layout="fill"' por 'fill'
                      style={{ objectFit: "cover" }} // Usa 'style' para definir 'objectFit'
                      className="rounded"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Ajusta según tus necesidades
                    />

                    <div className="absolute inset-0 border-4 border-white rounded"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-4 bg-red-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-300"></div>
        </section>

        {isCarouselVisible && (
          <Carousel
            images={images}
            onClose={() => setIsCarouselVisible(false)}
          />
        )}
      </main>

      <Footer />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");

        :root {
          --color-green-primary: #15803d;
          --color-cream-paper: #fdf6e3;
          --color-notebook-paper: #f8f8f8;
        }

        body {
          font-family: "Architects Daughter", cursive;
        }

        .bg-green-primary {
          background-color: var(--color-green-primary);
        }

        .bg-cream-paper {
          background-color: var(--color-cream-paper);
        }

        .bg-notebook-paper {
          background-color: var(--color-notebook-paper);
          background-image: linear-gradient(#e5e5e5 1px, transparent 1px);
          background-size: 100% 2rem;
        }

        .text-green-primary {
          color: var(--color-green-primary);
        }

        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
