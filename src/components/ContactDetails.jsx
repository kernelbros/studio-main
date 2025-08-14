import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  return (
    <FadeIn>
      {/* Sección de oficinas */}
      <section aria-labelledby="oficinas-title">
        <header>
          <h2
            id="oficinas-title"
            className="font-display text-base font-semibold text-neutral-950"
          >
            Nuestras oficinas
          </h2>
        </header>
        <p className="mt-6 text-base text-neutral-600">
          ¿Prefiere hacerlo en persona? Visítenos en cualquiera de nuestras
          oficinas.
        </p>
        <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      </section>

      {/* Sección de contacto por correo y WhatsApp */}
      <Border className="mt-16 pt-16" as="section" aria-labelledby="contacto-title">
        <header>
          <h2
            id="contacto-title"
            className="font-display text-base font-semibold text-neutral-950"
          >
            Envíenos un correo
          </h2>
        </header>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Andrés", "andres@kernelbros.com.ar"],
            ["Bruno", "brunogallo@kernelbros.com.ar"],
            ["Antinori", "antinori@kernelbros.com.ar"],
          ].map(([nombre, correo]) => (
            <div key={correo}>
              <dt className="font-semibold text-neutral-950">{nombre}</dt>
              <dd>
                <Link
                  href={`mailto:${correo}`}
                  className="text-neutral-600 hover:text-neutral-950"
                  aria-label={`Enviar correo a ${nombre}`}
                >
                  {correo}
                </Link>
              </dd>
            </div>
          ))}

          {/* Contacto por WhatsApp */}
          <div>
            <dt className="font-semibold text-neutral-950">Nuestro WhatsApp</dt>
            <dd>
              <Link
                href="https://wa.me/5493794980067"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-950"
                aria-label="Abrir WhatsApp para contacto"
              >
                +54 9 3794 980067
              </Link>
            </dd>
          </div>
        </dl>
      </Border>

      {/* Sección de redes sociales */}
      <Border className="mt-16 pt-16" as="section" aria-labelledby="redes-title">
        <header>
          <h2
            id="redes-title"
            className="font-display text-base font-semibold text-neutral-950"
          >
            Síguenos
          </h2>
        </header>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
