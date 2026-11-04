"use client";

import { useState } from "react";
import { contact, contato } from "@/content/site";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "mt-1 w-full rounded-lg border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Sem endpoint configurado: abre o e-mail do visitante com os dados preenchidos.
    if (!contato.formEndpoint) {
      const body = Array.from(data.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        "Contato pelo site",
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(contato.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl bg-brand-light p-8 text-center">
        <h2 className="text-2xl font-bold">Mensagem enviada!</h2>
        <p className="mt-2 text-muted">Obrigado. Nossa equipe vai entrar em contato em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Nome *
          <input name="Nome" required className={field} autoComplete="name" />
        </label>
        <label className="block text-sm font-semibold">
          Sobrenome *
          <input name="Sobrenome" required className={field} autoComplete="family-name" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          E-mail *
          <input name="Email" type="email" required className={field} autoComplete="email" />
        </label>
        <label className="block text-sm font-semibold">
          WhatsApp / Telefone
          <input name="Telefone" type="tel" className={field} autoComplete="tel" />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        Tenho interesse em
        <select name="Interesse" className={field} defaultValue="">
          <option value="" disabled>Selecione…</option>
          {contato.interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold">
        Mensagem
        <textarea name="Mensagem" rows={5} className={field} />
      </label>
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Enviando…" : "Enviar"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-600">
          Não foi possível enviar. Tente pelo WhatsApp ou e-mail.
        </p>
      )}
    </form>
  );
}
