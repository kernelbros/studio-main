import React from "react";

// Componentes locales
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <header className="space-y-6">
            <h2 className="font-display text-3xl font-medium text-white sm:text-4xl [text-wrap:balance]">
            Tu visión merece ser vista.
            </h2>
            <div>
              <Button href="/contact" invert aria-label="Ir a página de contacto">
                ¡Hablemos!
              </Button>
            </div>
          </header>

          <section className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">
              Nuestras oficinas
            </h3>
            <Offices
              invert
              className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
            />
          </section>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
