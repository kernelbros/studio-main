// Importa el componente Container para el layout principal
import Container from "@/components/Container";
// Importa FadeIn para animar la aparición del contenido
import FadeIn from "@/components/FadeIn";
// Importa Link para navegación interna en Next.js
import Link from "next/link";
// Importa Image para optimización de imágenes
import Image from "next/image";
// Importa el logo SVG
import { MdOutlineHome } from "react-icons/md";
// Importa React (opcional en componentes funcionales modernos)
import React from "react";
import KernelBrosLogo from "./KernelBrosFavicon.svg";

// Componente NotFound que muestra la página de error 404
const NotFound = () => {
  return (
    // Container centra el contenido verticalmente y agrega padding superior
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
      {/* FadeIn aplica animación de aparición al contenido */}
      <FadeIn className="flex flex-col items-center">
        {/* Header con el logo en la parte superior */}
        <header className="absolute top-0 pt-10">
          {/* Logo importado */}
          <Image
            src={KernelBrosLogo}
            width={128 / 3}
            height={114 / 3}
            alt="KernelBrosLogo logo"
          />
        </header>
        {/* Muestra el código de error 404 */}
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          404
        </p>
        {/* Título indicando que la página no fue encontrada */}
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Página no encontrada
        </h1>
        {/* Mensaje explicativo */}
        <p className="mt-2 text-sm text-neutral-600">
          Lo sentimos, no pudimos encontrar la página que buscas.
        </p>
        {/* Enlace para volver a la página principal */}
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          {/* Botón para volver al inicio */}
          <button className="bg-white text-black flex flex-row justify-center items-center gap-2 text-center rounded-3xl px-6 py-2">
            {/* Icono de casa */}
            <MdOutlineHome className="text-xl" />
            <span>Volver al inicio</span>
          </button>
        </Link>
      </FadeIn>
    </Container>
  );
};

// Exporta el componente NotFound para ser usado por Next.js
export default NotFound;
