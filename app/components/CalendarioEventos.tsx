import { useEffect, useState } from 'react';

interface Evento {
  fecha: string;
  actividad: string;
  detalle: string;
}

interface CalendarioProps {
  eventos: Evento[];
}

const CalendarioEventos = ({ eventos: initialEventos }: CalendarioProps) => {
  const [eventos, setEventos] = useState<Evento[]>(initialEventos);

  useEffect(() => {
    setEventos(initialEventos);
  }, [initialEventos]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <ul className="space-y-4">
        {eventos.map((evento, index) => (
          <li key={index} className="flex items-center">
            <span className="w-32 font-semibold">{evento.fecha}:</span>
            <span>{evento.actividad} - </span>
            <span className="ml-2 text-gray-500">{evento.detalle}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarioEventos;
