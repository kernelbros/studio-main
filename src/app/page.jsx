import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";

import LapepiniereLogo from "@/images/clients/lapepiniere.svg";
import LogoEnlace from "@/images/clients/enlace.svg";
import LogoIvess from "@/images/clients/ivess.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        {/* Sección principal */}
        <HeroSection />

        {/* Clientes */}
        <Clients />

        {/* Testimonios */}
        <div className="space-y-24">
          <Testimonials
            testimonialAuthor={{ name: "La Pépinière", logo: LapepiniereLogo }}
          >
            El equipo de KernelBros fue clave para impulsar nuestro proyecto con
            soluciones innovadoras y un acompañamiento constante.
          </Testimonials>

          <Testimonials
            testimonialAuthor={{ name: "Enlace", logo: LogoEnlace }}
          >
            Su trabajo en nuestra plataforma digital superó ampliamente nuestras
            expectativas. Destacamos la calidad y el compromiso.
          </Testimonials>

          <Testimonials
            testimonialAuthor={{ name: "Ivess", logo: LogoIvess }}
          >
            La atención personalizada y la excelencia en cada detalle nos dieron
            la confianza de seguir creciendo junto a ellos.
          </Testimonials>
        </div>

        {/* Servicios */}
        <Services />

        {/* Contacto */}
        <ContactSection />
      </Container>
    </main>
  );
}