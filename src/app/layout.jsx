// Importa la estructura principal del sitio
import RootLayout from "@/components/RootLayout";

// Importa los estilos globales
import "./globals.css";

// Define los metadatos globales
export const metadata = {
  title: {
    template: "%s | KernelBros",
    default: "KernelBros",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // opcional para dispositivos Apple
    other: {
      rel: "mask-icon",
      url: "/KernelBrosFavicon.svg",
    },
  },
};


// Layout global que envuelve toda la aplicación
export default function Layout({ children }) {
  return (
    <html lang="es" className="h-full bg-neutral-950 text-base antialiased text-neutral-100">
      <body className="flex min-h-full flex-col">
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
