import Link from "next/link";
import { useEffect, useState } from "react";
import { Category } from "../../mocks/data/menus";

export default function Menu(): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_MOOCKING_URL}/menus`)
      .then((response) => response.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  return (
    <nav className="w-full items-center justify-center flex px-4 py-4 bg-white ">
      <ul className="flex w-80">
        {categories &&
          categories.map(({ id, name, url }) => (
            <li key={id} className="px-2">
              <Link href={url}>
                <a className="text-slate-600 font-bold uppercase">{name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
