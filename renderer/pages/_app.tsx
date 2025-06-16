import { AppProps } from "next/app";
import "@/styles/globals.css";
import CustomReactQueryProvider from "@/context/CustomReactQueryProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomReactQueryProvider>
      <Component {...pageProps} />
    </CustomReactQueryProvider>
  );
}
