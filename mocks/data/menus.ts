import menusData from "./menu-data.json";

export interface Category {
  id: string;
  name: string;
  url: string;
}

let menus: Category[] = [...menusData];

export async function create(menu: Category): Promise<Category> {
  menus.push(menu);
  return menu;
}

export async function read(id: string): Promise<Category | undefined> {
  return menus.find((menu) => menu.id === id);
}

export async function readMany(ids: string[]) {
  const values = await Promise.all(
    ids.map((id) => {
      return read(id);
    })
  );
  return values;
}

export async function reset(): Promise<void> {
  menus = [...menus];
}
