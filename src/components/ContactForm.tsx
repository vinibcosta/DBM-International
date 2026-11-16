import { contato } from "@/content/site";

/** Google Forms embutido. Altura em telas pequenas é maior porque o formulário fica mais estreito e comprido. */
export default function ContactForm() {
  const { googleFormUrl, formHeight } = contato;

  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <iframe
        src={`${googleFormUrl}?embedded=true`}
        title="Formulário de contato da DBM"
        loading="lazy"
        className="block h-[var(--form-h-mobile)] w-full border-0 md:h-[var(--form-h-desktop)]"
        style={
          {
            "--form-h-mobile": `${formHeight.mobile}px`,
            "--form-h-desktop": `${formHeight.desktop}px`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
