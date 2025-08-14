import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Descubrimiento" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Trabajamos en estrecha colaboración con nuestros clientes para comprender sus{" "}
          <strong className="font-semibold text-neutral-950">necesidades</strong> y
          objetivos, involucrándonos en sus operaciones diarias para entender qué hace funcionar su negocio.
        </p>
        <p>
          Nuestro equipo realiza entrevistas profundas y análisis detallados, mientras nuestros gestores de cuentas se enfocan en conocer la cultura y procesos internos. Nuestros expertos en seguridad también evalúan los riesgos y oportunidades para acceder a las{" "}
          <strong className="font-semibold text-neutral-950">cuentas</strong>
          empresariales, entregando esa información al equipo de auditoría.
        </p>
        <p>
          Una vez finalizada la auditoría, presentamos un{" "}
          <strong className="font-semibold text-neutral-950">plan</strong> integral y, lo más importante, un presupuesto.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluido en esta fase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Cuestionarios en profundidad</TagListItem>
        <TagListItem>Estudios de viabilidad</TagListItem>
        <TagListItem>Encuestas a empleados</TagListItem>
        <TagListItem>Pruebas de concepto</TagListItem>
        <TagListItem>Auditoría forense</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
