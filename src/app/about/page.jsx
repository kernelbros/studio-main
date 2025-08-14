import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Sobre nosotros" title="Nuestra fortaleza es la colaboración">
        <p>
          Creemos que nuestra fortaleza radica en nuestro enfoque colaborativo, que pone a nuestros clientes en el centro de todo lo que hacemos.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            KernelBros nació de tres amigos que notaron que los estudios de desarrollo cobraban el doble de lo que costaría un equipo interno. Desde el principio, nos comprometimos a hacer las cosas de manera diferente, cobrando el triple.
          </p>
          <p>
            En KernelBros, somos más que colegas: somos una familia. Esto significa que pagamos poco y esperamos que la gente trabaje hasta tarde. Queremos que nuestros empleados traigan todo su ser al trabajo. A cambio, solo pedimos que permanezcan allí hasta al menos las 18:30.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Empleados mal remunerados" />
          <StatListItem value="52" label="Clientes conformes" />
          <StatListItem value="$25M" label="Facturas emitidas" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};


export default AboutPage;
