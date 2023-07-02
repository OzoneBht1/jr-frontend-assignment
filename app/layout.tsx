import ReactQueryProvider from "@/utils/provider";
import ReduxProvider from "@/store/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { IToken } from "@/types/interface/token";
import store from "@/store/index";
import { Provider } from "react-redux";
import getQueryClient from "@/utils/getQueryClient";
import { getSpotifyAccess } from "@/queryFns/getSpotifyAccess";
import { dehydrate } from "@tanstack/react-query";
import { ReactQueryHydrate } from "@/utils/ReactQueryHydrate";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music Sansar",
  description: "Sansar for music lovers",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["token"], getSpotifyAccess);
  const dehydratedState = dehydrate(queryClient);
  return (
    <html lang="en">
      <ReactQueryProvider>
        <ReduxProvider>
          <body className={inter.className}>
            <nav className="sticky h-20 z-30 bg-white flex items-center justify-between top-0 left-0 px-5 shadow-md">
              <Image src="/logo.svg" alt="logo" width={130} height={100} />
              <Link className="text-yellow-700 font-bold" href="/search">
                Search
              </Link>
            </nav>

            <ReactQueryHydrate state={dehydratedState}>
              {children}
            </ReactQueryHydrate>
          </body>
        </ReduxProvider>
      </ReactQueryProvider>
    </html>
  );
}
