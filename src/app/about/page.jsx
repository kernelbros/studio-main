import React from "react";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import { StatList, StatListItem } from "@/components/StatList";
import Cultures from "@/components/Cultures";
import ContactSection from "@/components/ContactSection";

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Sobre nosotros"
        title="Nuestra fuerza está en laburar juntos"
      >
        <p>
          Creemos que nuestra mayor fuerza está en laburar en equipo, poniendo a nuestros clientes en el centro de todo lo que hacemos.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            KernelBros arrancó con tres amigos que se dieron cuenta de que los estudios de desarrollo cobraban el doble de lo que costaría armar un equipo interno. Desde el principio, nos propusimos hacer todo distinto… y cobrar el triple.
          </p>
          <p>
            Acá en KernelBros somos más que amigos: somos una familia. Esto quiere decir que pagamos poco y pretendemos que la gente se quede hasta tarde. Queremos que nuestros empleados traigan todo su ser al laburo. A cambio, solo pedimos que estén hasta, por lo menos, las 18:30.
          </p>
        </div>
      </PageIntro>

      {/* Estadísticas */}
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Empleados mal pagos" />
          <StatListItem value="52" label="Clientes conformes" />
          <StatListItem value="$25M" label="Facturas emitidas" />
        </StatList>
      </Container>

      {/* Cultura */}
      <Cultures />

      {/* Sección de contacto */}
      <ContactSection />
    </>
  );
};

export default AboutPage;
