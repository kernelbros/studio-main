import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Requerimientos
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nombre" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Número de WhatsApp"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
          <TextInput
            label="Cargo/Relación con el proyecto"
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label="@Instagram"
            name="instagram"
          />
          <TextInput
            label="Cuéntanos acerca de tu proyecto"
            name="message"
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Presupuesto</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="$25K – $50K" name="budget" value="25" />
              <RadioInput label="$50K – $100K" name="budget" value="50" />
              <RadioInput label="$100K – $150K" name="budget" value="100" />
              <RadioInput label="Más de $150K" name="budget" value="150" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Trabajemos juntos
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
