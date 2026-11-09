import { partners } from "@/content/site";

export default function Partners({ title }: { title: string }) {
  return (
    <section className="bg-surface py-20">
      <div className="container-site">
        <h2 className="section-title text-center">{title}</h2>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <li
              key={p.name}
              className="flex h-24 items-center justify-center rounded-xl border border-black/5 bg-white p-4 text-center shadow-sm"
            >
              {p.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.logo} alt={p.name} loading="lazy" decoding="async" className="max-h-16 w-auto object-contain" />
              ) : (
                <span className="font-display text-sm font-semibold text-brand">{p.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
