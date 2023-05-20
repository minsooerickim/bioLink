import "styles/globals.css";
import "styles/tailwind.css";

import { ToastProvider } from "@apideck/components";
import { AppProps } from "next/app";
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ToastProvider>
      <Nav />
      <Component {...pageProps} />
    </ToastProvider>
  );
}
