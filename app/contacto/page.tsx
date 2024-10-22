"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Architects_Daughter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveSvg from "../components/WaveSvg";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

export default function Contacto() {
  return (
    <div className="min-h-screen bg-cream-paper text-green-900 font-handwritten">
      <Header currentPage="contacto" />

      <main>
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[67vh] overflow-hidden">
          <Image
            src="/images/bannerContacto.jpeg"
            alt="Contáctanos"
            fill // Cambia 'layout="fill"' por 'fill'
            style={{ objectFit: "cover" }} // Usa 'style' para definir 'objectFit'
            className="brightness-75"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Ajusta según tus necesidades
            priority // Añade esta línea para cargar la imagen con prioridad
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className={`${architectsDaughter.className} text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center leading-tight shadow-text`}
            >
              Contáctanos
            </h2>
          </div>
          <WaveSvg />
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl mb-6 text-center leading-relaxed">
              Estamos aqu&iacute; para responder a todas tus preguntas. No dudes
              en ponerte en contacto con nosotros para obtener m&aacute;s
              informaci&oacute;n sobre nuestra escuela o para programar una
              visita.
            </p>
          </div>
        </section>

        <section className="bg-notebook-paper py-8 sm:py-12 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">
                  Información de Contacto
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-green-600" />
                    <span>
                      Pasaje Ricardo Garc&iacute;a, Puerto Montt, Los Lagos
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-green-600" />
                    <span>(+569) xxxxxxxx</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-6 h-6 mr-2 text-green-600" />
                    <span>paloma@rurales.dempuertomontt.cl</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">
                  Env&iacute;anos un Mensaje
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-4 bg-red-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-300"></div>
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
            Ubicaci&oacute;n
          </h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.3821506277136!2d-72.91447372393706!3d-41.45262617129161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183a8f7a6f05d3%3A0xb1c0936426c88e61!2sEscuela%20Rural%20La%20Paloma!5e0!3m2!1ses!2scl!4v1727353355677!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
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
