import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Omkar Sangeet Mahavidhyalay Ahmedabad",
  description:
    "An Indian classical singing classes including Vocal, Harmonium, Tabla, Guitar, Keyboard and Kathak in Ahmedabad!",
  themeColor: "#E9DBD8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
