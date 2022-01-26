import bagsData from "./bags-data.json";

export interface Bag {
  id: string;
  name: string;
  pageUrl: string;
  colors: string[];
  price: number;
  images: string[];
  desciption: string;
  technicalCharacteristics: {
    racketCapacity: string;
    dimensions: string;
    numberOfInsulatedCompartments: string;
    numberOfStraps: string;
    capacity: string;
    numberOfPockets: string[];
    numberOfHandles: string;
    composition: string[];
  };
}

let bags: Bag[] = [...bagsData];

export async function create(bag: Bag): Promise<Bag> {
  bags.push(bag);
  return bag;
}

export async function read(id: string): Promise<Bag | undefined> {
  return bags.find((bag) => bag.id === id);
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
  bags = [...bags];
}
