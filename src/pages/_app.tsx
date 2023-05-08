import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { FontFamilies } from "../config/Fonts";
import "@/styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>
        {`
          :root {
            ${`--bellefair-font: ${FontFamilies.bellefair.style.fontFamily};`};
            ${`--barlow-font: ${FontFamilies.barlow.style.fontFamily};`};
            ${`--barlowCondensed-font: ${FontFamilies.barlowCondensed.style.fontFamily};`};
          }
        `}
      </style>

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
