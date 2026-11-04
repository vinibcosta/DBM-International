import Link from "next/link";
import { contact } from "@/content/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export const whatsappUrl = () =>
  `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export default function ContactBlock({
  title = "Fale com a gente",
  showCta = true,
}: {
  title?: string;
  showCta?: boolean;
}) {
  const items = [
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Enviar mensagem", href: whatsappUrl(), external: true },
    { icon: MailIcon, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
    { icon: PhoneIcon, label: "Telefone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  ];

  return (
    <section className="bg-brand py-16 text-white">
      <div className="container-site">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center transition hover:bg-white/20"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-brand-dark">
                <Icon className="h-7 w-7" />
              </span>
              <span className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-accent">{label}</span>
              <span className="mt-1 break-all text-lg">{value}</span>
            </a>
          ))}
        </div>
        {showCta && (
          <div className="mt-10 text-center">
            <Link href="/form" className="btn-primary">
              Quero estudar no exterior
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
