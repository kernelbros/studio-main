import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Sucursal Centro" invert={invert}>
          Estados Unidos 229
          <br />
          Corrientes, Argentina
        </Office>
      </li>
      <li>
        <Office name="Sucursal Sur" invert={invert}>
          Avenida Independencia 5233
          <br />
          Corrientes, Argentina
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
