import "styles/globals.css";
import "styles/tailwind.css";
import { SessionProvider } from "next-auth/react";

import { ToastProvider } from "@apideck/components";
import { AppProps } from "next/app";
import Nav from "@/components/Nav";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}): JSX.Element {
  return (
    <SessionProvider session={session}>
      <ToastProvider>
        <Nav />
        <Component {...pageProps} />
      </ToastProvider>
    </SessionProvider>
  );
}
