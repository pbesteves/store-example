import racketsData from "./rackets-data.json";

export interface Racket {
  id: string;
  name: string;
  pageUrl: string;
  colors: string[];
  price: number;
  gripSizes: string[];
  images: string[];
  desciption: string;
  technicalCharacteristics: {
    headSize: string;
    unstrungWeight: string;
    stringingPattern: string;
    section: string;
    recommendedString: string;
    recommendedGrip: string;
    length: string;
    unstrungBalance: string;
    raStiffness: string;
    composition: string;
    recommendedTension: string;
    strungOrUnstrung: string;
  };
}

let rackets: Racket[] = [...racketsData];

export async function create(racket: Racket): Promise<Racket> {
  rackets.push(racket);
  return racket;
}

export async function read(id: string): Promise<Racket | undefined> {
  return rackets.find((racket) => racket.id === id);
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
  rackets = [...rackets];
}
