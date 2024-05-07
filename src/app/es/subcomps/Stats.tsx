import { BsTruck, BsPersonCheck, BsShieldCheck } from "react-icons/bs";

const stats = [
  {
    id: 1,
    name: "Envío Gratuito Península Ibérica en 48 horas",
    icon: BsTruck,
  },
  {
    id: 2,
    name: "3 años de Garantía y Servicio al Cliente",
    icon: BsPersonCheck,
  },
  { id: 3, name: "Compra segura SSL", icon: BsShieldCheck },
];

export default function Stats() {
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col items-center gap-y-4"
            >
              <dt className="text-base leading-7 max-w-xs font-medium text-gray-700">{stat.name}</dt>
              <stat.icon
                className="order-first text-6xl font-semibold tracking-tight sm:text-5xl text-[#2b9f76]"
                aria-hidden="true"
              />
            </div>
          ))}
        </dl>
      </div>
    </div>

    <hr className="bg-neutral-200 mx-56"/>
    </>
  );
}
