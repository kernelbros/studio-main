import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

// Logos importados
import logoAcaray from "../images/clients/acaray.svg";
import logoBoulevard from "../images/clients/boulevard.svg";
import logoCarnaval from "../images/clients/carnaval.svg";
import logoCnq from "../images/clients/cnq.svg";
import logoConnectto from "../images/clients/connectto.svg";
import logoCuruzu from "../images/clients/curuzu.svg";
import logoDanubio from "../images/clients/pizzaclub.svg";
import logoPizzaclub from "../images/clients/elgalpon.svg";

// Lista de clientes con nombre y logo
const clients = [
  { name: "Danubio", logo: logoDanubio },
  { name: "Boulevard", logo: logoBoulevard },
  { name: "El Galpón", logo: logoPizzaclub },
  { name: "Connectto", logo: logoConnectto },
  { name: "CNQ", logo: logoCnq },
  { name: "Carnaval", logo: logoCarnaval },
  { name: "Acaray", logo: logoAcaray },
  { name: "Curuzú", logo: logoCuruzu },
];

const Clients = () => {
  return (
    <section className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56" aria-labelledby="clients-title">
      <Container>
        {/* Título */}
        <FadeIn className="flex items-center gap-x-8">
          <h2
            id="clients-title"
            className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left"
          >
            Trabajamos con grandes marcas y startups
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>

        {/* Logos */}
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(({ name, logo }) => (
              <li key={name} className="flex justify-center items-center">
                <FadeIn>
                  <Image src={logo} alt={`Logo de ${name}`} className="max-h-16 object-contain" unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </section>
  );
};

export default Clients;
