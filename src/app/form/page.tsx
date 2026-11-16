import type { Metadata } from "next";
import { contato } from "@/content/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactBlock from "@/components/ContactBlock";

export const metadata: Metadata = { title: "Contato" };

export default function ContatoPage() {
  return (
    <>
      <PageHero title={contato.title} text={contato.text} />
      <section className="py-20">
        <div className="container-site max-w-3xl">
          <h2 className="section-title text-center">{contato.formTitle}</h2>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>
      <ContactBlock title="Prefere falar direto?" showCta={false} />
    </>
  );
}
