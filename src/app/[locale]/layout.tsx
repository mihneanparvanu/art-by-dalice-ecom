import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { routing } from "../../i8n/routing";
import "../../styles/globals.css";
import { Manrope } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

// Components
import Navbar from "../../components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale == "en"
      ? "Dalice (Daniela Davidescu Brown)"
      : "Dalice (Daniela Davidescu Brown)";
  return {
    title: title,
    alternates: {
      languages: {
        en: "/",
        ro: "/",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <Navbar locale={locale} />
        <NextIntlClientProvider>
          {children}
          <LanguageSwitcher />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
