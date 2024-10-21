"use client";

import Image from "next/image";
import { Users, GraduationCap, Heart, Leaf, Book, Smile } from "lucide-react";
import { Architects_Daughter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveSvg from "../components/WaveSvg";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-cream-paper text-green-900 font-handwritten">
      <Header currentPage="nosotros" />

      <main>
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[67vh] overflow-hidden">
          <Image
            src="/images/bannerNosotros.png"
            alt="Nuestra Escuela"
            fill // Cambia 'layout="fill"' por 'fill'
            style={{ objectFit: "cover" }} // Usa 'style' para definir 'objectFit'
            className="brightness-75"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Ajusta según tus necesidades
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className={`${architectsDaughter.className} text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center leading-tight shadow-text`}
            >
              Nuestra Historia
            </h2>
          </div>
          <WaveSvg />
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              La Escuela Rural La Paloma, situada en Puerto Montt, fue fundada
              el 24 de mayo de 1959 en el sector Alto La Paloma,
              espec&iacute;ficamente en la calle Ricardo Garc&iacute;a S/N. En
              sus inicios, contaba con 90 alumnos y un equipo educativo
              compuesto por una directora, ocho profesores, un profesor de
              educaci&oacute;n diferencial, una asistente social, una
              psic&oacute;loga, un t&eacute;cnico en p&aacute;rvulos, un
              t&eacute;cnico en computaci&oacute;n, as&iacute; como dos
              auxiliares y dos manipuladoras de alimentos.
            </p>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              En 2009, se implement&oacute; la Jornada Escolar Completa (JEC)
              para la educaci&oacute;n b&aacute;sica, y en 2014 se
              estableci&oacute; el Proyecto de Integraci&oacute;n Escolar (PIE).
              En la actualidad, la Escuela Rural La Paloma atiende a alrededor
              de 104 estudiantes, distribuidos en 10 cursos que abarcan desde
              Pre-K&iacute;nder hasta Octavo año b&aacute;sico. Los cursos se
              organizan en combinaciones: Pre-K&iacute;nder-K&iacute;nder,
              1º-2º, 3º-4º y 5º-6º.
            </p>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              Desde 2017, el Proyecto de Integraci&oacute;n Escolar (PIE) cuenta
              con un equipo multidisciplinario que incluye a profesionales y
              asistentes, tales como Educadora Diferencial, Psicopedagoga,
              Psic&oacute;loga, Fonoaudi&oacute;loga y Terapeuta Ocupacional,
              enriqueciendo as&iacute; la atenci&oacute;n y el desarrollo
              integral de nuestros alumnos.
            </p>
          </div>
        </section>

        <section className="bg-notebook-paper py-8 sm:py-12 relative">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
              Nuestros Valores
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Comunidad",
                  desc: "Fomentamos un fuerte sentido de pertenencia y colaboración.",
                },
                {
                  icon: GraduationCap,
                  title: "Excelencia",
                  desc: "Nos esforzamos por alcanzar los más altos estándares educativos.",
                },
                {
                  icon: Heart,
                  title: "Cuidado",
                  desc: "Proporcionamos un ambiente nurturante para cada estudiante.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-4 bg-red-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-300"></div>
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
            Sellos Educativos
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Colegio público, laico e inclusivo",
                desc: "En lo social, cultural y educacional.",
              },
              {
                icon: GraduationCap,
                title: "Formador de personas autónomas",
                desc: "En habilidades y competencias.",
              },
              {
                icon: Leaf,
                title: "Formación medio ambientalista",
                desc: "Desde los niveles de pre-básica hasta 8º básico.",
              },
              {
                icon: Book,
                title: "Consecuente en nuestra labor",
                desc: "Como educadores y en la práctica de valores, con ejercicio en el pensamiento crítico.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex items-start"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-notebook-paper py-8 sm:py-12 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
                Visión
              </h3>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed">
                Ser un referente en nuestra comunidad educativa, formando
                estudiantes íntegros y autónomos; promoviendo la cultura,
                lectura, escritura, vida sustentable y cuidado del medio
                ambiente, a través de una formación inclusiva, desarrollando
                habilidades y competencias, que favorezca la creatividad,
                estilos de aprendizaje y cuidado de la naturaleza, en un entorno
                de respeto, equidad, tolerancia y solidaridad, donde estos den
                evidencia de ser personas capaces de desarrollarse en la
                sociedad actual.
              </p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
                Misión
              </h3>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed">
                Ser una escuela inclusiva, conscientes del buen uso y cuidado de
                los recursos naturales y tecnológicos, formando estudiantes
                autónomos que desarrollen sus habilidades y competencias,
                promocionando: el interés por la lectura, escritura y la
                conciencia multicultural en general, desde la educación
                pre-básica a 8º básico, y el cuidado del medio ambiente, sobre
                la base de sus propias experiencias, incentivando su inserción
                en el mundo académico, social y laboral.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-4 bg-red-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-300"></div>
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
            Definiciones y Sentidos Institucionales
          </h3>
          <div className="max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold mb-4">
              Inclusión e integración escolar
            </h4>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed">
              Educar a la persona en su totalidad, estimulando también sus
              habilidades emocionales, sociales y éticas. Recibir y formar
              estudiantes con capacidades diferentes, alumnos y alumnas con
              distintos ritmos y niveles de aprendizaje y vulnerabilidad social,
              para que sean personas respetuosas, responsables, colaboradoras y
              buenos ciudadanos; con valores y con habilidades para vivir esos
              valores en su vida cotidiana.
            </p>
          </div>
        </section>

        <section className="bg-notebook-paper py-8 sm:py-12 relative">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
              Objetivos Transversales/Actitudinales
            </h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl mb-6 leading-relaxed">
                El valor es un principio previo que orienta y da significado a
                la existencia humana. Son normas e incentivos para actuar.
                Educar en valores exige del educador y de la comunidad educativa
                en su totalidad, promover valores positivos y desarraigar los
                negativos.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Responsabilidad",
                  "Respeto",
                  "Tolerancia",
                  "Solidaridad",
                  "Honradez",
                  "Libertad",
                  "Honestidad",
                  "Perseverancia",
                  "Lealtad",
                  "Convivencia",
                  "Espíritu de superación",
                  "Empatía",
                  "Automotivación",
                ].map((valor, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-md flex items-center"
                  >
                    <Smile className="w-6 h-6 text-green-600 mr-3" />
                    <span className="font-semibold">{valor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-4 bg-red-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-300"></div>
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
