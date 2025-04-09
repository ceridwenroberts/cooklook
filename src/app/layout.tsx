import type { Metadata } from "next";
import { Princess_Sofia, Outfit } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/utils/contexts";
import LoginWrapper from "@/components/LoginWrapper";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const princessSofia = Princess_Sofia({
  variable: "--font-princess-sofia",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en h-100 ">
      <body
        className={`min-h-screen flex flex-col
          bg-[url(/checkered-pattern.jpg)] bg-center bg-repeat ${outfit.variable} antialiased ${princessSofia.variable}`}
      >
        <UserProvider>
          <LoginWrapper>{children}</LoginWrapper>
        </UserProvider>
        <Footer />
      </body>
    </html>
  );
}
