import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "@/Components/Footer";
// import { SessionProvider } from "next-auth/react"
import SessionWrapper from "@/Components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Patreon-clone : Fund your projects",
  description: "crowd-funding platform for projects and ideas",
};

  export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(125%_125%_at_50%_10%,#000_70%,#7c3aed_130%)]">
        <SessionWrapper>
          <Navbar />

          <main className="min-h-screen ">
            {children}
          </main>

          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}

