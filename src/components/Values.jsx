import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Nuestros valores"
        title="Equilibrio entre confiabilidad e innovación"
      >
        <p>
          Nos esforzamos por mantenernos a la vanguardia de las tendencias y
          tecnologías emergentes, mientras valoramos la experiencia y los
          procesos que nos han dado resultados. Nuestros valores fundamentales
          respaldan cada decisión que tomamos.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulosos">
            La primera parte de cualquier alianza es lograr que nuestro diseñador
            coloque tu logo en nuestra plantilla. El segundo paso es adaptar los
            colores.
          </GridListItem>
          <GridListItem title="Eficientes">
            Nos enorgullece nunca perder una fecha de entrega, lo cual es fácil
            porque gran parte del trabajo ya fue realizado años atrás.
          </GridListItem>
          <GridListItem title="Adaptables">
            Cada empresa tiene necesidades únicas y nuestro mayor desafío es
            adaptar esas necesidades a algo que ya hemos construido.
          </GridListItem>
          <GridListItem title="Honestos">
            Somos transparentes en todos nuestros procesos, confiando en que
            nuestros clientes realmente valoran esa claridad.
          </GridListItem>
          <GridListItem title="Leales">
            Fomentamos relaciones a largo plazo con nuestros clientes que van
            más allá de la entrega de un producto, permitiéndonos acompañarlos
            durante años.
          </GridListItem>
          <GridListItem title="Innovadores">
            El mundo tecnológico está en constante evolución y nosotros también.
            Siempre estamos atentos a nuevas ideas y proyectos para mejorar.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
