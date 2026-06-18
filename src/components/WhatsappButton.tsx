import { whatsappLink, whatsappDefaultMessage } from "@/lib/site";
import { WhatsappIcon } from "./icons";

interface WhatsappButtonProps {
  message?: string;
  label?: string;
  variant?: "solid" | "outline" | "cream";
  size?: "md" | "lg";
  className?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-body font-semibold tracking-wide transition-all duration-300 will-change-transform focus-visible:outline-2";

const variants = {
  solid:
    "bg-rojo text-lino shadow-[0_14px_30px_-12px_rgba(154,43,30,0.7)] hover:bg-rojo-deep hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(154,43,30,0.8)]",
  cream:
    "bg-lino text-rojo shadow-card hover:bg-lino-soft hover:-translate-y-0.5",
  outline:
    "border border-tinta/25 bg-transparent text-tinta hover:border-verde hover:text-verde hover:-translate-y-0.5",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/** Primary conversion CTA — opens a WhatsApp chat with a prefilled order message. */
export default function WhatsappButton({
  message = whatsappDefaultMessage,
  label = "Pedir por WhatsApp",
  variant = "solid",
  size = "md",
  className,
}: WhatsappButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
    >
      <WhatsappIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      {label}
    </a>
  );
}
