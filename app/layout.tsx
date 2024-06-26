import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel and Camp",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="realative overflow-hidden"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
