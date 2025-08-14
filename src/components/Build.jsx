import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Construcción" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Basándonos en la fase de descubrimiento, desarrollamos una hoja de ruta
          integral para cada producto y comenzamos a trabajar en la entrega. La
          hoja de ruta es un plan detallado que nos permite organizar el proceso
          técnico y asegurar el mejor resultado posible.
        </p>
        <p>
          A cada cliente se le asigna un gerente de cuentas clave para mantener
          abiertas las líneas de comunicación y garantizar la transparencia en el
          progreso del proyecto. Este gerente actúa como puente entre las
          necesidades del cliente y el equipo de desarrollo, que trabaja
          intensamente en la implementación de soluciones innovadoras.
        </p>
        <p>
          Nuestro equipo está comprometido en responder rápidamente a las
          consultas y mantener informado al cliente en cada etapa, reforzando la
          confianza y evitando malentendidos durante el proceso.
        </p>
      </div>
      <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO de Unseal" }}
        className="mt-12"
      >
        ¡KernelBros fue tan regular con sus actualizaciones de progreso que casi
        pensamos que eran automatizados!
      </Blockquote>
    </Section>
  );
};

export default Build;
