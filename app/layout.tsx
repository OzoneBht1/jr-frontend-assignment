import ReactQueryProvider from "@/utils/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music Sansar",
  description: "Sansar for music lovers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={inter.className}>
          <nav className="sticky h-20 flex items-center justify-between top-0 left-0 px-5 shadow-md">
            <Image src="/logo.svg" alt="logo" width={130} height={100} />
            <Link className="text-yellow-700 font-bold" href="/search">
              Search
            </Link>
          </nav>

          {children}
        </body>
      </ReactQueryProvider>
    </html>
  );
}
