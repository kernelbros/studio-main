import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import LapepiniereLogo from "@/images/clients/lapepiniere.svg";
import logoEnlace from "@/images/clients/enlace.svg";
import logoivess from "@/images/clients/ivess.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <HeroSection />
        <Clients />
        <div className="space-y-24">
          <Testimonials
            testimonialAuthor={{ name: "LaPepiniere", logo: LapepiniereLogo }}
          >
            El equipo de KernelBros ha sido fundamental para el éxito de nuestro proyecto.
          </Testimonials>
          <Testimonials
            testimonialAuthor={{ name: "Enlace", logo: logoEnlace }}
          >
            Excelente trabajo en el desarrollo de nuestra plataforma digital. Superaron nuestras expectativas.
          </Testimonials>
          <Testimonials
            testimonialAuthor={{ name: "Ivess", logo: logoivess }}
          >
            La atención personalizada y la calidad del trabajo nos dejaron muy satisfechos.
          </Testimonials>
        </div>
        <Services />
        <ContactSection />
      </Container>
    </main>
  );
}
