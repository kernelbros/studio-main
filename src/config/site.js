export function constructMetadata({
  title = "KernelBros - Agencia de Desarrollo Web",
  description = "KernelBros es una agencia de desarrollo web que crea sitios web modernos, rápidos y seguros utilizando las últimas tecnologías como Next.js, Tailwind CSS y más. Ofrecemos soluciones personalizadas para empresas de todos los tamaños.",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    metadataBase: new URL("https://kernelbros.com.ar"),
    openGraph: {
      title,
      description,
      url: "https://kernelbros.com.ar",
      siteName: "KernelBros",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "KernelBros - Agencia de Desarrollo Web",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@KernelBros",
    },
    icons: {
      icon: icons,
    },
    themeColor: "#ffffff",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
      },
    }),
  };
}
