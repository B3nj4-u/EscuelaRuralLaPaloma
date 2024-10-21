import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'slick-carousel/slick/slick.css'; // Importar estilos de slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Importar tema de slick-carousel

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Escuela Rural La Paloma",
  description: "Sitio creado por Pedro Ulloa",
  icons: {
    icon: "/favicon.ico", // Reemplaza con la ruta a tu icono
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
