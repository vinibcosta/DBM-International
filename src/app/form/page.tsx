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
      <section className="py-16">
        <div className="container-site max-w-2xl">
          <ContactForm />
        </div>
      </section>
      <ContactBlock title="Prefere falar direto?" showCta={false} />
    </>
  );
}
