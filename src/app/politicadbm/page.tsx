import type { Metadata } from "next";
import { contact, site } from "@/content/site";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Política de privacidade" };

/**
 * ATENÇÃO: texto modelo. Substitua pela política de privacidade oficial
 * da DBM (a página atual do Wix não pôde ser lida automaticamente).
 */
export default function PoliticaPage() {
  return (
    <>
      <PageHero title="Política de privacidade" />
      <section className="py-16">
        <div className="container-site max-w-3xl space-y-6 text-muted [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold">
          <p>
            Esta política descreve como a {site.legalName} coleta, usa e protege as informações enviadas por
            visitantes deste site.
          </p>
          <h2>Informações coletadas</h2>
          <p>Coletamos apenas os dados que você nos envia pelos formulários, e-mail ou WhatsApp (como nome, e-mail e telefone).</p>
          <h2>Uso das informações</h2>
          <p>Usamos esses dados somente para responder ao seu contato e prestar nossos serviços de consultoria.</p>
          <h2>Compartilhamento</h2>
          <p>Seus dados só são compartilhados com instituições parceiras quando necessário para a sua aplicação e com o seu consentimento.</p>
          <h2>Contato</h2>
          <p>
            Dúvidas sobre esta política: <a className="text-brand underline" href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
