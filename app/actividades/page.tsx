"use client";

import Image from "next/image";
import {
  MessageSquare,
  Sprout,
  Music,
  Compass,
  Users,
  Laptop,
} from "lucide-react";
import { Architects_Daughter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveSvg from "../components/WaveSvg";
import CalendarioEventos from "../components/CalendarioEventos";
import { useEffect, useState } from "react";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

interface Evento {
  fecha: string;
  actividad: string;
  detalle: string;
}

export default function Actividades() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await fetch("/api/calendario");
        const data = await response.json();
        setEventos(data);
      } catch (error) {
        console.error("Error al obtener eventos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventos();
  }, []);

  return (
    <div className="min-h-screen bg-cream-paper text-green-900 font-handwritten">
      <Header currentPage="actividades" />

      <main>
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[67vh] overflow-hidden">
          <Image
            src="/images/bannerActividades.jpeg"
            alt="Actividades Escolares"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-75"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className={`${architectsDaughter.className} text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center leading-tight shadow-text`}
            >
              Nuestras Actividades
            </h2>
          </div>
          <WaveSvg />
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              En la Escuela Rural La Paloma, creemos en un aprendizaje integral
              que va más allá del aula. Nuestras actividades están diseñadas
              para fomentar la curiosidad, la creatividad y el amor por la naturaleza en nuestros estudiantes.
            </p>
          </div>
        </section>

        <section className="bg-notebook-paper py-8 sm:py-12 relative">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
              Actividades Destacadas
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: MessageSquare,
                  title: "Club de Debate",
                  desc: "Fomentamos el pensamiento crítico y las habilidades de comunicación a través de debates semanales.",
                },
                {
                  icon: Sprout,
                  title: "Proyecto de Reforestación",
                  desc: "Los estudiantes aprenden sobre ecología plantando y cuidando árboles en nuestra comunidad.",
                },
                {
                  icon: Music,
                  title: "Taller de Música",
                  desc: "Exploramos el mundo de la música, aprendiendo diversos instrumentos y formando conjuntos musicales.",
                },
                {
                  icon: Compass,
                  title: "Excursiones Educativas",
                  desc: "Organizamos salidas para explorar nuestro entorno natural y cultural, enriqueciendo el aprendizaje.",
                },
                {
                  icon: Users,
                  title: "Actos Comunitarios",
                  desc: "Presentaciones de baile y canto que fortalecen los lazos con nuestra comunidad educativa.",
                },
                {
                  icon: Laptop,
                  title: "Rincón Tecnológico",
                  desc: "Durante el recreo, los estudiantes pueden interactuar con computadoras y tablets para desarrollar habilidades digitales.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-center">
                    {item.title}
                  </h4>
                  <p className="text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-4 bg-red-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-300"></div>
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
            Calendario de Eventos
          </h3>
          {loading ? (
            <p>Cargando eventos...</p>
          ) : (
            <CalendarioEventos eventos={eventos} />
          )}
        </section>
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
