import Image from "next/image";
import logoAcaray from "../images/clients/acaray.svg";
import logoBoulevard from "../images/clients/boulevard.svg";
import logoCarnaval from "../images/clients/carnaval.svg";
import logoCnq from "../images/clients/cnq.svg";
import logoConnectto from "../images/clients/connectto.svg";
import logoCuruzu from "../images/clients/curuzu.svg";
import logoDanubio from "../images/clients/pizzaclub.svg";
import logopizzaclub from "../images/clients/elgalpon.svg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Danubio", logoDanubio],
  ["Boulevard", logoBoulevard],
  ["El Galpon", logopizzaclub],
  ["Connectto", logoConnectto],
  ["CNQ", logoCnq],
  ["Carnaval", logoCarnaval],
  ["Acaray", logoAcaray],
  ["Curuzu", logoCuruzu],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trabajamos con grandes marcas y startups 
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
