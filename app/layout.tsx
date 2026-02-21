import type { Metadata } from "next";
import { Montserrat, Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-urbain",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Underground Bouge | Promotion Talents Musique Urbaine Bénin",
  description: "Accompagne, promeut et propulse la nouvelle génération d'artistes urbains au Bénin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${bebasNeue.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}