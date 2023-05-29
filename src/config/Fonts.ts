import { Bellefair } from "next/font/google";
import { Barlow } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  adjustFontFallback: false,
});
const barlow = Barlow({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

const barlowCondensed = localFont({
  src: [
    {
      path: "../../public/assets/Fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/Fonts/Barlow_Condensed//BarlowCondensed-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/Fonts/Barlow_Condensed/BarlowCondensed-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/Fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/Fonts/Barlow_Condensed/BarlowCondensed-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/Fonts/Barlow_Condensed/BarlowCondensed-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

// const barlowCondensed = Barlow_Condensed({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   adjustFontFallback: false,
// });

export const FontFamilies = {
  bellefair: bellefair,
  barlow: barlow,
  barlowCondensed: barlowCondensed,
};
