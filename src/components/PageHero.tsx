export default function PageHero({
  title,
  text,
  image,
}: {
  title: string;
  text?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand/60" />
      <div className="container-site relative py-20 md:py-28">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg text-white/90">{text}</p>}
      </div>
    </section>
  );
}
