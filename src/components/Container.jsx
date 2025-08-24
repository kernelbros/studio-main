import clsx from "clsx";

/**
 * Componente contenedor flexible para secciones de la página.
 *
 * Props:
 * - as: Elemento HTML o componente a renderizar (default: "div")
 * - className: Clases adicionales de Tailwind
 * - children: Contenido del contenedor
 */
const Container = ({ as: Component = "div", className, children }) => {
  return (
    <Component className={clsx("max-w-7xl mx-auto px-6 lg:px-8", className)}>
      {/* Contenido centralizado con ancho máximo */}
      <div className="max-w-2xl mx-auto lg:max-w-none">{children}</div>
    </Component>
  );
};

export default Container;
