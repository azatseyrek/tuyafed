import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./styles/globals.css";
import "./styles/reset.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "TUYAFED",
  description: "Turkiye Yazilim Federasyonu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-theme="light">
      <body
        className={`${poppins.className} leading-8 flex flex-col justify-between`}
      >
        <Navbar />
        <Sidebar />
        <main className="flex flex-1 w-full max-w-[1800px] self-center items-center justify-center px-4 lg:px-20 mt-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
