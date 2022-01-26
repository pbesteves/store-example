import Image from "next/image";
import Link from "next/link";
import { Bag } from "../../mocks/data/bags";
import { Racket } from "../../mocks/data/rackets";
import styles from "./ProductCard.module.scss";

interface IProductCard {
  product: Bag | Racket;
}

export default function ProductCard({ product }: IProductCard) {
  const cardClasses = `${styles.card} flex flex-col items-center w-1/2 mb-10 md:mb-0 px-2`;
  const cardContentClasses = `${styles.cardContent} block md:flex flex-col items-center w-full h-full text-center md:justify-between`;
  return (
    <li className={cardClasses}>
      <Link href={product.pageUrl}>
        <a className={cardContentClasses}>
          <div className="relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              width="600"
              height="600"
              className="w-full mx-auto relative z-1"
            />
          </div>
          <p className="pt-5 md:pt-0">{product.name}</p>
        </a>
      </Link>
    </li>
  );
}
