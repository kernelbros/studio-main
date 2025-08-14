import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Entrega" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Aproximadamente a mitad de la fase de construcción, extendemos cada
          proyecto 6 semanas debido a un cambio en los{" "}
          <strong className="font-semibold text-neutral-950">
            requerimientos
          </strong>
          . Esto nos permite ajustar el presupuesto una última vez antes del
          lanzamiento.
        </p>
        <p>
          Aunque usamos principalmente componentes preconstruidos, la mayor parte
          del{" "}
          <strong className="font-semibold text-neutral-950">progreso</strong>{" "}
          de cada proyecto ocurre en las últimas 24 horas. El tiempo de
          desarrollo asignado a cada cliente se utiliza para crear demos de
          realidad aumentada que se vuelven virales en redes sociales.
        </p>
        <p>
          Nos aseguramos de que las páginas principales del sitio estén{" "}
          <strong className="font-semibold text-neutral-950">
            completamente funcionales
          </strong>{" "}
          en el lanzamiento — las páginas auxiliares, por supuesto, serán
          esqueletos de lorem ipsum que se actualizan como parte de nuestro
          costoso{" "}
          <strong className="font-semibold text-neutral-950">
            mantenimiento
          </strong>
          .
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluido en esta fase
      </h3>
      <List>
        <ListItem title="Pruebas">
          Nuestros proyectos siempre tienen una cobertura de pruebas del 100%, lo
          cual sería impresionante si nuestras pruebas no fueran tan porosas como
          un colador.
        </ListItem>
        <ListItem title="Infraestructura">
          Para garantizar la confiabilidad, solo usamos los mejores servidores de
          Digital Ocean que se pueden conseguir por $4 al mes.
        </ListItem>
        <ListItem title="Soporte">
          Como tenemos las claves API de cada servicio crítico que utiliza tu
          empresa, podés esperar soporte de por vida (y facturas) de nuestra
          parte.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
