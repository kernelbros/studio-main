import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Nuestro proceso" title="Cómo trabajamos">
        <p>
          Creemos en la eficiencia y en maximizar nuestros recursos para brindar el mejor valor a nuestros clientes. La principal forma en que lo logramos es reutilizando y mejorando los proyectos que hemos desarrollado durante la última década.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Descubrimiento */}
        <Discover />
        {/* Construcción */}
        <Build />
        {/* Entrega */}
        <Deliver />
      </div>
      {/* Valores */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
