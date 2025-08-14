import FadeIn from "@/components/FadeIn";

export default function HeroSection() {
  return (
    <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            ¡Haz realidad tu presencia online con nosotros!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Somos un grupo de desarrolladores que trabajamos en la intersección
            entre el diseño y la tecnología. Es una intersección muy concurrida
            — muchos de nuestro personal han estado involucrados en atropellos.
          </p>
        </FadeIn>
  );
}
