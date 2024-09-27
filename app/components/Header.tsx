import Link from "next/link";
import { Sun } from "lucide-react";
import Clouds from "./Clouds";

type HeaderProps = {
  currentPage: "inicio" | "nosotros" | "actividades" | "contacto";
};

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="relative bg-gradient-to-b from-sky-400 to-sky-200 text-white pt-6 z-10">
      <div className="absolute top-0 left-0 w-full h-full z-5">
        <Clouds /> {/* Añade el componente Clouds aquí con z-50 */}
      </div>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center relative">
        <div className="flex items-center mb-4 sm:mb-0 relative z-20">
          {" "}
          {/* Se agrega z-20 para asegurar que el sol esté encima de todo */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full flex items-center justify-center mr-3 transform -rotate-12 shadow-lg relative z-20">
            <Sun className="w-8 h-8 sm:w-10 sm:h-10 text-sky-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-900 drop-shadow-md">
            Escuela Rural La Paloma
          </h1>
        </div>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:space-x-6 text-base sm:text-lg">
            {["inicio", "nosotros", "actividades", "contacto"].map((page) => (
              <li key={page} className="mx-2 my-1 sm:mx-0 sm:my-0">
                <Link
                  href={page === "inicio" ? "/" : `/${page}`}
                  className={`${
                    currentPage === page ? "text-yellow-400" : "text-sky-900"
                  } hover:text-yellow-400 transition-colors duration-200 font-medium drop-shadow-sm`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Ajustamos el SVG para que continúe con el gradiente del header */}
      <svg
        className="absolute top-[100%] left-0 w-full h-24 transform scale-y-[-1] -mt-1 z-10" // z-10 para asegurarnos que esté debajo del sol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {/* Definimos un gradiente que continúe el del header */}
        <defs>
          <linearGradient
            id="header-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#38bdf8", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#bae6fd", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#header-gradient)" // Utilizamos el gradiente en el path del SVG
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </header>
  );
}
