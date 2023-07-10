import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Omkar Sangeet Mahavidhyalay",
  description: "An indian musical classes in Ahmedabad!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto border-2">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
