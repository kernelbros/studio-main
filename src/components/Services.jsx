import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Servicios"
        title="Te ayudamos a identificar, explorar y aprovechar nuevas oportunidades."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nuestro equipo combina creatividad, experiencia técnica y visión
          estratégica para transformar tus ideas en proyectos de alto impacto.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          {/* Imagen lateral */}
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>

          {/* Lista de servicios */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Desarrollo web">
              Creamos sitios modernos, rápidos y responsivos, diseñados para
              transmitir tu identidad y conectar con tu audiencia.
            </ListItem>
            <ListItem title="Desarrollo de aplicaciones">
              Nuestro equipo domina las tecnologías más actuales para construir
              aplicaciones escalables, seguras y de gran rendimiento.
            </ListItem>
            <ListItem title="E-commerce">
              Diseñamos y optimizamos tiendas online que potencian tus ventas,
              mejoran la experiencia de compra y hacen crecer tu negocio.
            </ListItem>
            <ListItem title="Gestión de contenidos personalizada">
              Implementamos sistemas de gestión de contenido flexibles y a
              medida, que te permiten administrar tu web de forma sencilla y
              eficiente.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
