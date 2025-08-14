import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Trabajos destacados",
    links: [
      { title: "Clon de Amazon", href: "/work/amazonclone" },
      { title: "Bazar E-commerce", href: "/work/bazar" },
      { title: "Blog Personal 101", href: "/work/blog101" },
      {
        title: (
          <>
            Ver todos <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Compañía",
    links: [
      { title: "Sobre nosotros", href: "/about" },
      { title: "Nuestro proceso", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contacto", href: "/contact" },
    ],
  },
  {
    title: "Conectar",
    links: SocialMediaProfiles,
  },
];
