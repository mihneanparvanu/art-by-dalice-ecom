import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import DaliceNavbar from "./components/Navbar/DaliceNavbar";

const rubik = Rubik({
  subsets: ['latin'],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Dalice Art Shop",
  description: "Fill your home with curated art",
};

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>
}

export default async function RootLayout({
  children
}:
 Props)
{
  

  return (
    <html lang="en">
      <body className={`${rubik.className} relative`}>
       
       <DaliceNavbar/>
        {children}
        <Footer/>   
      
      </body>
    </html>
  );
}