import { Bellefair } from "next/font/google";
import { Barlow } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  adjustFontFallback: false,
});
const barlow = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  adjustFontFallback: false,
});
const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const FontFamilies = {
  bellefair: bellefair,
  barlow: barlow,
  barlowCondensed: barlowCondensed,
};
