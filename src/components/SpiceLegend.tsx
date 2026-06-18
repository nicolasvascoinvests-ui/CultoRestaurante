import { spiceLevels } from "@/lib/menu";
import { ChiliIcon } from "./icons";

const colorClass: Record<string, string> = {
  rojo: "text-rojo",
  barro: "text-barro",
  verde: "text-verde",
  maiz: "text-maiz",
};

/** The brand "Nivel de picante" key — a small ritual that frames the menu. */
export default function SpiceLegend({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-tinta/10 bg-lino-soft/70 px-5 py-5 backdrop-blur-sm sm:px-7 ${className ?? ""}`}
    >
      <p className="eyebrow text-rojo">Nivel de picante</p>
      <p className="mt-2 max-w-2xl text-sm text-tinta/70">
        Manejamos cuatro niveles de picante. Dile a tu mesero —o escríbelo en tu pedido— y
        ajustamos el punto exacto a tu gusto.
      </p>
      <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4">
        {spiceLevels.map((level) => (
          <li key={level.id} className="flex items-center gap-3">
            <span className={`shrink-0 ${colorClass[level.color]}`}>
              <ChiliIcon className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-tinta">{level.label}</span>
              <span className="block text-xs text-tinta/55">{level.sublabel}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
