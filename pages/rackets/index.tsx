import { NextPage } from "next";
import Head from "next/head";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Racket } from "../../mocks/data/rackets";

interface RacketsPage {
  rackets: Racket[];
}

const Rackets: NextPage<RacketsPage> = ({ rackets }) => {
  return (
    <div>
      <Head>
        <title>Tennis Store - Bags</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container mx-auto md:mb-5 md:mt-10 px-4 md:px-0">
        <div>
          <ul className="flex flex-wrap md:pt-6">
            {rackets &&
              rackets.map((racket) => (
                <ProductCard key={racket.id} product={racket} />
              ))}
          </ul>
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_MOOCKING_URL}/rackets`
  );
  const rackets = await res.json();

  return {
    props: {
      rackets,
    },
  };
}

export default Rackets;