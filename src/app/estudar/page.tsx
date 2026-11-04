import type { Metadata } from "next";
import { estudar } from "@/content/site";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import ContactBlock from "@/components/ContactBlock";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = { title: "Onde estudar" };

export default function EstudarPage() {
  return (
    <>
      <PageHero title={estudar.hero.title} text={estudar.hero.text} image={estudar.hero.image} />

      <section className="py-20">
        <div className="container-site">
          <h2 className="section-title text-center">{estudar.destinationsTitle}</h2>
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {estudar.destinations.map((d) => (
              <li key={d} className="rounded-full bg-brand-light px-5 py-2 font-display font-semibold text-brand">
                {d}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-muted">{estudar.destinationsNote}</p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site max-w-3xl">
          <h2 className="section-title text-center">{estudar.whyTitle}</h2>
          <ul className="mt-10 space-y-4">
            {estudar.why.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-brand-dark">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site max-w-4xl">
          <h2 className="section-title text-center">{estudar.levelsTitle}</h2>
          <p className="mt-4 text-center text-muted">{estudar.levelsText}</p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/5 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="px-5 py-3 font-display text-sm uppercase">No exterior</th>
                  <th className="px-5 py-3 font-display text-sm uppercase">Equivalente no Brasil</th>
                  <th className="px-5 py-3 font-display text-sm uppercase">Duração</th>
                </tr>
              </thead>
              <tbody>
                {estudar.levels.map((l, i) => (
                  <tr key={l.name} className={i % 2 ? "bg-surface" : "bg-white"}>
                    <td className="px-5 py-3 font-semibold text-brand">{l.name}</td>
                    <td className="px-5 py-3">{l.br}</td>
                    <td className="px-5 py-3 text-muted">{l.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Partners title="Algumas instituições parceiras" />
      <ContactBlock />
    </>
  );
}
