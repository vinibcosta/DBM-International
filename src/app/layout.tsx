import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { images, site } from "@/content/site";

// Fontes baixadas no build e servidas pelo próprio site (sem esperar o Google)
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Estudar no exterior | DBM International Education | Consultoria Educacional",
    template: "%s | DBM International Education",
  },
  description: site.description,
  openGraph: {
    title: "DBM International Education",
    description: site.description,
    images: [images.logo],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
