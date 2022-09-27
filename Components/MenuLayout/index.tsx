import Link from "next/link";
import React, { useEffect } from "react";
import { Container } from "./styles";
import Image from "next/image";

import { ReactNode } from "react";
import { useRouter } from "next/router";

type props = {
  children: ReactNode;
};

export const MenuLayout = ({ children }: props) => {
  return (
    <Container>
      <header>
        <Image src="/assets/shared/logo.svg" width={48} height={48} />

        <div className="line" />

        <Nav />

        <div className="burguer">
          <button>
            <Image
              src="/assets/shared/icon-hamburger.svg"
              width={24}
              height={21}
            />
          </button>
        </div>
      </header>

      {children}
    </Container>
  );
};

const Nav = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <nav>
      <Link href="/">
        <a className={pathname === "/" ? "active" : undefined}>
          <strong>00 </strong>HOME
        </a>
      </Link>

      <Link href="/destination">
        <a>
          <strong>01 </strong>DESTINATION
        </a>
      </Link>

      <Link href="/crew">
        <a>
          <strong>02 </strong>CREW
        </a>
      </Link>

      <Link href="/technology">
        <a>
          <strong>03 </strong>TECHNOLOGY
        </a>
      </Link>
    </nav>
  );
};
