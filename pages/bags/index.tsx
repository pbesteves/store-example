import { NextPage } from "next";
import Head from "next/head";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { Bag } from "../../mocks/data/bags";

interface BagsPage {
  bags: Bag[];
}

const Bags: NextPage<BagsPage> = ({ bags }) => {
  return (
    <div>
      <Head>
        <title>Tennis Store - Bags</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container mx-auto md:mb-5 md:mt-10 px-4 md:px-0">
        <div>
          <ProductGrid>
            {bags &&
              bags.map((bag) => <ProductCard key={bag.id} product={bag} />)}
          </ProductGrid>
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_MOOCKING_URL}/bags`);
  const bags = await res.json();

  return {
    props: {
      bags,
    },
  };
}

export default Bags;