import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-titre",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-corps",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fantômes — Débusque les abonnements qu'on paie sans s'en servir",
  description:
    "Dépose ton relevé bancaire, on repère en 2 minutes les abonnements oubliés qui te coûtent chaque année.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${fraunces.variable} ${publicSans.variable} font-corps`}>
        {children}
      </body>
    </html>
  );
}
