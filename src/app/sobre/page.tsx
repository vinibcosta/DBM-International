import type { Metadata } from "next";
import { images, sobre } from "@/content/site";
import PageHero from "@/components/PageHero";
import ContactBlock from "@/components/ContactBlock";

export const metadata: Metadata = { title: "Conheça a DBM" };

export default function SobrePage() {
  return (
    <>
      <PageHero title={sobre.hero.title} text={sobre.hero.text} image={images.hero} />

      <section className="py-20">
        <div className="container-site">
          <h2 className="section-title text-center">{sobre.whyTitle}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {sobre.why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm">
                <h3 className="text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="container-site max-w-3xl text-center">
          <h2 className="section-title">{sobre.recognition.title}</h2>
          <p className="mt-5 text-lg text-muted">{sobre.recognition.text}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="section-title text-center">{sobre.stepsTitle}</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {sobre.steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl bg-surface p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-xl font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactBlock title={sobre.support.title} />
    </>
  );
}
