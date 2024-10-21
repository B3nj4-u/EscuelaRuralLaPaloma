import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Escuela Rural La Paloma
            </h3>
            <p className="text-yellow-300 text-sm sm:text-base">
              Educación con amor en el corazón del campo
            </p>
          </div>
          {/* Sección de Redes Sociales */}
          <div className="flex flex-col items-center mb-4 sm:mb-0">
            <div className="flex justify-center items-center mb-2">
              <div className="flex flex-col items-center mx-4">
                <a href="https://www.instagram.com/lapalomarrss/" target="_blank" rel="noopener noreferrer" className="mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
                    alt="Instagram"
                    className="w-8 h-8 transition-transform duration-300 hover:scale-110"
                  />
                </a>
                <div className="bg-green-600 rounded p-2 text-center text-xs sm:text-sm text-yellow-300">
                  @lapalomarrss
                </div>
              </div>
              <div className="flex flex-col items-center mx-4">
                <a href="https://www.facebook.com/escrurallapaloma/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt="Facebook"
                    className="w-8 h-8 transition-transform duration-300 hover:scale-110"
                  />
                </a>
                <div className="bg-green-600 rounded p-2 text-center text-xs sm:text-sm text-yellow-300">
                  Escuela Rural La Paloma
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end">
            <div className="flex items-center mb-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-300" />
              <span className="text-sm sm:text-base">
                Pasaje Ricardo García, Puerto Montt, Los Lagos
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-300" />
              <span className="text-sm sm:text-base">(+569) xxxxxxxx </span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-300" />
              <span className="text-sm sm:text-base">
                paloma@rurales.dempuertomontt.cl
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-[8px] text-green-600 opacity-30 hover:opacity-100 transition-opacity duration-300">
            Creado por Pedro Ulloa, Ingeniero Civil Inform&aacute;tico en Escuela Rural La Paloma
          </p>
        </div>
      </div>
    </footer>
  );
}