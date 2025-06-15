import { AppProps } from "next/app";
import "@/styles/globals.css";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href={"/home"}>홈페이지</Link>
      <Link href={"/success"}>성공페이지</Link>
      <Link href={"/survey"}>설문페이지</Link>
      <Component {...pageProps} />
    </>
  );
}
