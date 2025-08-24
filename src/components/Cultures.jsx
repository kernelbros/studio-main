import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Nuestra cultura"
        title="Equilibrá tu pasión con tu pasión por la vida"
        invert
      >
        <p>
          Somos un grupo de personas con la misma onda, que compartimos los mismos valores fundamentales… y nos gusta que el laburo sea divertido.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Lealtad" invert>
            Nuestro equipo está con nosotros desde el principio… porque a nadie le dejamos tener perfil en LinkedIn. 😎
          </GridListItem>
          <GridListItem title="Confianza" invert>
            No nos importa a qué hora labura cada uno, siempre y cuando estén laburando cada segundo que estén despiertos. ⚡
          </GridListItem>
          <GridListItem title="Compasión" invert>
            Nunca sabés lo que alguien está pasando en su casa… y nos aseguramos de no averiguarlo. 😂
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
