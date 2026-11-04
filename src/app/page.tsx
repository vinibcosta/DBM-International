import Link from "next/link";
import { home, images } from "@/content/site";
import ContactBlock from "@/components/ContactBlock";
import Partners from "@/components/Partners";
import { CheckIcon } from "@/components/Icons";

export default function HomePage() {
  const { hero, programs, about } = home;
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="container-site grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              {hero.title} <span className="text-accent">{hero.highlight}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/90">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={hero.ctaPrimary.href} className="btn-primary">{hero.ctaPrimary.label}</Link>
              <Link href={hero.ctaSecondary.href} className="btn-outline">{hero.ctaSecondary.label}</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-accent/30 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.hero}
              alt="Estudantes no exterior"
              className="relative aspect-[5/4] w-full rounded-3xl bg-brand-dark object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section id="programas" className="py-20">
        <div className="container-site">
          <h2 className="section-title text-center">{home.programsTitle}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[5/4] overflow-hidden bg-brand-light">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold uppercase">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.text}</p>
                  <Link href="/form" className="mt-4 inline-block font-display text-sm font-semibold text-accent-dark hover:underline">
                    Saiba mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / BENEFÍCIOS */}
      <section className="bg-brand-light py-20">
        <div className="container-site grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="section-title">{about.title}</h2>
            <p className="mt-5 text-lg text-muted">{about.text}</p>
            <Link href="/sobre" className="btn-primary mt-8">Conheça a DBM</Link>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">{about.benefitsTitle}</h3>
            <ul className="mt-5 space-y-4">
              {about.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-brand-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Partners title={home.partnersTitle} />
      <ContactBlock />
    </>
  );
}
