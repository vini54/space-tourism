import homeStyle from "@/styles/homeStyles.module.css";
import { NextPageWithLayout } from "./_app";
import { MenuLayout } from "@/components/MenuLayout";

const Home: NextPageWithLayout = () => {
  return (
    <main className={`${homeStyle.main} w-screen h-screen flex items-end`}>
      <div
        className={`${homeStyle.wrap} w-full px-6 flex items-end justify-evenly gap-3`}
      >
        <div className={`${homeStyle.left} flex flex-col items-start gap-4`}>
          <h3 className="text-2xl tracking-widest text-gray-300">
            SO, YOU WANT TO TRAVEL TO
          </h3>

          <h1 className="text-8xl min-[480px]:text-9xl">SPACE</h1>

          <p className="text-slate-400">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="right bg-slate-50 text-gray-900 text-2xl w-52 h-52">
          EXPLORE
        </button>
      </div>
    </main>
  );
};

Home.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};

export default Home;
