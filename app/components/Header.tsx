import Link from "next/link"
import { Sun } from "lucide-react"

type HeaderProps = {
  currentPage: 'inicio' | 'nosotros' | 'actividades' | 'contacto'
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="bg-green-700 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full flex items-center justify-center mr-3 transform -rotate-12">
            <Sun className="w-8 h-8 sm:w-10 sm:h-10 text-green-700" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Escuela Rural "La Paloma"
          </h1>
        </div>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:space-x-6 text-base sm:text-lg">
            <li className="mx-2 my-1 sm:mx-0 sm:my-0">
              <Link href="/" className={currentPage === 'inicio' ? "text-yellow-300" : "hover:text-yellow-300"}>
                Inicio
              </Link>
            </li>
            <li className="mx-2 my-1 sm:mx-0 sm:my-0">
              <Link href="/nosotros" className={currentPage === 'nosotros' ? "text-yellow-300" : "hover:text-yellow-300"}>
                Nosotros
              </Link>
            </li>
            <li className="mx-2 my-1 sm:mx-0 sm:my-0">
              <Link href="/actividades" className={currentPage === 'actividades' ? "text-yellow-300" : "hover:text-yellow-300"}>
                Actividades
              </Link>
            </li>
            <li className="mx-2 my-1 sm:mx-0 sm:my-0">
              <Link href="/contacto" className={currentPage === 'contacto' ? "text-yellow-300" : "hover:text-yellow-300"}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}