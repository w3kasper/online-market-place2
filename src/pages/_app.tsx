import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NavBar } from "~/components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <NavBar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
