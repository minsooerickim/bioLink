import "styles/globals.css";
import "styles/tailwind.css";

import { ToastProvider } from "@apideck/components";
import { AppProps } from "next/app";
import Nav from "@/components/Nav";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SessionProvider session={pageProps.session}>
      <ToastProvider>
        <Nav />
        <Component {...pageProps} />
      </ToastProvider>
    </SessionProvider>
  );
}
