import { MenuLayout } from "@/Components/MenuLayout";
import { NextPageWithLayout } from "../_app";
import styles from "./styles.module.css";
import { useState } from "react";
import Image from "next/image";

type planetTargetOpt = "moon" | "mars" | "europa" | "titan";

const Destination: NextPageWithLayout = () => {
  const [planetTarget, setPlanetTarget] = useState<planetTargetOpt>("moon");
  return (
    <main
      className={`${styles.main} min-[900px]:w-screen min-[900px]:h-screen flex items-end`}
    >
      <div
        className={`${styles.container} flex flex-col justify-center gap-10 px-4 lg:px-[6%] max-[900px]:pt-32 max-[900px]:pb-8`}
      >
        <h3 className="text-xl md:text-3xl text-center md:text-left font-light uppercase">
          <span className="ml-6 text-gray-700 font-extrabold">01</span> Pick
          your destination
        </h3>

        <div
          className={`${styles.wrap} px-0 lg:px-6 min-[900px]:flex-row flex-col flex max-[900px]:gap-12 gap-8 justify-evenly items-center`}
        >
          <div className="flex justify-center sm:w-auto w-3/4">
            {planetTarget === "moon" && (
              <PlanetImage src="image-moon.png" alt="moon" />
            )}
            {planetTarget === "mars" && (
              <PlanetImage src="image-mars.png" alt="mars" />
            )}
            {planetTarget === "europa" && (
              <PlanetImage src="image-europa.png" alt="europa" />
            )}
            {planetTarget === "titan" && (
              <PlanetImage src="image-titan.png" alt="titan" />
            )}
          </div>

          <div
            className={`${styles.content} w-full flex flex-col max-[900px]:items-center gap-8 sm:w-2/5 sm:min-w-[445px]`}
          >
            <nav
              className={`${styles.contentNav} max-[900px]:w-fit pb-2 flex justify-start items-center gap-6 text-sm sm:text-base relative text-slate-300`}
            >
              <p
                onClick={() => setPlanetTarget("moon")}
                className={`${
                  planetTarget === "moon" &&
                  "text-slate-50 border-b-2 border-slate-50"
                } ${
                  planetTarget !== "moon" && "border-transparent"
                } cursor-pointer transition-all duration-500 pb-1 border-b-2  hover:text-slate-400 hover:border-slate-400`}
              >
                MOON
              </p>
              <p
                onClick={() => setPlanetTarget("mars")}
                className={`${
                  planetTarget === "mars" &&
                  "text-slate-50 border-b-2 border-slate-50"
                } ${
                  planetTarget !== "mars" && "border-transparent"
                } cursor-pointer transition-all duration-500 pb-1 border-b-2 hover:text-slate-400 hover:border-slate-400`}
              >
                MARS
              </p>
              <p
                onClick={() => setPlanetTarget("europa")}
                className={`${
                  planetTarget === "europa" &&
                  "text-slate-50 border-b-2 border-slate-50"
                } ${
                  planetTarget !== "europa" && "border-transparent"
                } cursor-pointer transition-all duration-500 pb-1 border-b-2 hover:text-slate-400 hover:border-slate-400`}
              >
                EUROPA
              </p>
              <p
                onClick={() => setPlanetTarget("titan")}
                className={`${
                  planetTarget === "titan" &&
                  "text-slate-50 border-b-2 border-slate-50"
                } ${
                  planetTarget !== "titan" && "border-transparent"
                } cursor-pointer transition-all duration-500 pb-1 border-b-2 hover:text-slate-400 hover:border-slate-400`}
              >
                TITAN
              </p>
            </nav>

            {planetTarget === "moon" && (
              <PlanetInfos
                title="MOON"
                desc="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
                distance="384,400 km"
                time="3 days"
              />
            )}

            {planetTarget === "mars" && (
              <PlanetInfos
                title="MARS"
                desc="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
                distance="225 MIL. km"
                time="9 months"
              />
            )}

            {planetTarget === "europa" && (
              <PlanetInfos
                title="EUROPA"
                desc="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                distance="628 MIL. km"
                time="3 years"
              />
            )}

            {planetTarget === "titan" && (
              <PlanetInfos
                title="TITAN"
                desc="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                distance="1.6 BIL. km"
                time="7 years"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

type PlanetImageProps = {
  src: string;
  alt: string;
};

const PlanetImage = ({ src, alt }: PlanetImageProps) => {
  return (
    <Image
      className={`${styles.pulse} aspect-square`}
      src={"/assets/destination/" + src}
      width={350}
      height={350}
      alt={alt}
    />
  );
};

type planetInfosProps = {
  title: string;
  desc: string;
  distance: string;
  time: string;
};

const PlanetInfos = ({ title, desc, distance, time }: planetInfosProps) => {
  return (
    <div
      className={`${styles.contentInfos} ${styles.pulse} w-full flex flex-col max-[900px]:items-center max-[900px]:text-center gap-6`}
    >
      <h1 className="text-6xl md:text-8xl -ml-2">{title}</h1>

      <p className="text-slate-400 text-base">{desc}</p>

      <hr className="opacity-25 w-full" />

      <div className="w-full flex sm:flex-row flex-col justify-start max-[900px]:justify-evenly gap-8">
        <div className="min-[900px]:mr-[35%]">
          <small className="text-sm text-slate-300 font-normal uppercase whitespace-nowrap">
            AVG. DISTANCE
          </small>
          <h4 className="text-2xl uppercase whitespace-nowrap">{distance}</h4>
        </div>

        <div>
          <small className="text-sm text-slate-300 font-normal uppercase whitespace-nowrap">
            Est. travel time
          </small>
          <h4 className="text-2xl uppercase whitespace-nowrap">{time}</h4>
        </div>
      </div>
    </div>
  );
};

Destination.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};

export default Destination;
