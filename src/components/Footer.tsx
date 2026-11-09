import Link from "next/link";
import { images, nav, site, social, contact } from "@/content/site";
import { SocialIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="inline-block rounded-xl bg-white p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images.logo} alt="DBM Logo" loading="lazy" className="h-14 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm">{site.description}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Navegação</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Siga a DBM</h3>
          <div className="mt-4 flex gap-3">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-accent hover:text-brand-dark"
              >
                <SocialIcon name={s.name} className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
            <br />
            {contact.phone}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        <Link href="/politicadbm" className="hover:text-white">
          © 2021 - {year} {site.legalName} ® · Política de privacidade
        </Link>
      </div>
    </footer>
  );
}
