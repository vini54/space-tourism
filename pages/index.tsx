import { MenuLayout } from "@/Components/MenuLayout";
import { Container } from "@/styles/Homestyles";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <div className="left">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>

        <h1>SPACE</h1>

        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className="right">EXPLORE</button>
    </Container>
  );
};

Home.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};

export default Home;
