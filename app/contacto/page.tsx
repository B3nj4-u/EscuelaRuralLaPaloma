"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveSvg from "../components/WaveSvg";

export default function Contacto() {
  const [formData, setFormData] = useState({
    from_name: "", // Cambiado a from_name
    from_email: "", // Cambiado a from_email
    message: "",
  });
  const [formStatus, setFormStatus] = useState(""); // Para mostrar el estado del envío
  const [isLoading, setIsLoading] = useState(false); // Para controlar el estado de carga

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Inicia el estado de carga

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Mensaje enviado con éxito.");
          setFormData({ from_name: "", from_email: "", message: "" }); // Resetear el formulario
        },
        (error) => {
          console.log(error.text);
          setFormStatus("Error al enviar el mensaje.");
        }
      )
      .finally(() => {
        setIsLoading(false); // Detiene el estado de carga
      });
  };

  return (
    <div className="min-h-screen bg-cream-paper text-green-900 font-handwritten">
      <Header currentPage="contacto" />

      <main>
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[67vh] overflow-hidden">
          <Image
            src="/images/bannerContacto.jpeg"
            alt="Contáctanos"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-75"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center leading-tight shadow-text">
              Contáctanos
            </h2>
          </div>
          <WaveSvg />
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl mb-6 text-center leading-relaxed">
              Estamos aquí para responder a todas tus preguntas. No dudes en
              ponerte en contacto con nosotros para obtener más información
              sobre nuestra escuela o para programar una visita.
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
                    <span>Pasaje Ricardo García, Puerto Montt, Los Lagos</span>
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
                  Envíanos un Mensaje
                </h3>
                <form onSubmit={sendEmail}>
                  <div className="mb-4">
                    <label
                      htmlFor="from_name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name" // Cambiado a from_name
                      value={formData.from_name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="from_email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email" // Cambiado a from_email
                      value={formData.from_email}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    disabled={isLoading} // Deshabilita el botón cuando se está enviando
                  >
                    {isLoading ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </form>
                {isLoading && (
                  <div className="mt-4 flex justify-center">
                    {/* Aquí puedes añadir un spinner o un icono de cargando */}
                    <svg
                      className="animate-spin h-5 w-5 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  </div>
                )}
                {formStatus && <p className="mt-4 text-center">{formStatus}</p>}{" "}
                {/* Muestra el estado del formulario */}
              </div>
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
