import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { routing } from '../../i8n/routing';
import "./globals.css";
import { Manrope } from 'next/font/google'

//Components
import DaliceNavbar from "../../components/layout/DaliceNavbar"
import FloatingMenu from '../../components/ui/FloatingMenu';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
    
      <body className={`antialiased relative ${manrope.className}`}>
        <NextIntlClientProvider>
           <DaliceNavbar/>
       <FloatingMenu/>
          {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}