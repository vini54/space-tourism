import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type Layoutprops = {
  children: ReactNode;
};

export const MenuLayout = ({ children }: Layoutprops) => {
  const { pathname } = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <header
        className={`${styles.header} pl-8 flex justify-between items-center`}
      >
        <Link href="/">
          <img
            className="shrink-0 w-12 h-12"
            src="assets/shared/logo.svg"
            alt="brand"
          />
        </Link>

        <nav
          className={`${styles.nav} lg:w-3/5 pr-6 pl-24 bg-white bg-opacity-5 flex items-center justify-start gap-7 rounded-sm`}
        >
          <Link
            href="/"
            className={`${
              pathname === "/" ? styles.activeLink : null
            } transition-colors ease-in`}
          >
            <strong>00 </strong>
            HOME
          </Link>

          <Link
            href="/destination"
            className={`${
              pathname === "/destination" ? styles.activeLink : null
            } transition-colors ease-in`}
          >
            <strong>01 </strong>
            DESTINATION
          </Link>

          <Link
            href="/crew"
            className={`${
              pathname === "/crew" ? styles.activeLink : null
            } transition-colors ease-in`}
          >
            <strong>02 </strong>
            CREW
          </Link>

          <Link
            href="/technology"
            className={`${
              pathname === "/technology" ? styles.activeLink : null
            } transition-colors ease-in`}
          >
            <strong>03 </strong>
            TECHNOLOGY
          </Link>
        </nav>

        <button
          className={styles.burgerBtn}
          onClick={() => setIsOpenMenu(true)}
        >
          <img src="/assets/shared/icon-hamburger.svg" alt="icon" />
        </button>

        {isOpenMenu && (
          <nav
            className={`${styles.burgerNav} pb-6 flex flex-col gap-4 items-start rounded-bl-lg bg-slate-900 shadow-lg shadow-slate-900`}
          >
            <button
              className="self-end p-4"
              onClick={() => setIsOpenMenu(false)}
            >
              <img src="/assets/shared/icon-close.svg" alt="icon" />
            </button>

            <Link
              href="/"
              className={`${
                pathname === "/" ? styles.activeLink : null
              } transition-colors ease-in`}
            >
              HOME
            </Link>

            <Link
              href="/destination"
              className={`${
                pathname === "/destination" ? styles.activeLink : null
              } transition-colors ease-in`}
            >
              DESTINATION
            </Link>

            <Link
              href="/crew"
              className={`${
                pathname === "/crew" ? styles.activeLink : null
              } transition-colors ease-in`}
            >
              CREW
            </Link>

            <Link
              href="/technology"
              className={`${
                pathname === "/technology" ? styles.activeLink : null
              } transition-colors ease-in`}
            >
              TECHNOLOGY
            </Link>
          </nav>
        )}
      </header>

      {children}
    </>
  );
};
