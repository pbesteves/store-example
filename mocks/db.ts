import { factory, oneOf, primaryKey } from "@mswjs/data";
import categoriesData from "./data/categories-data.json";
import racketsData from "./data/rackets-data.json";
import bagsData from "./data/bags-data.json";
import faker from "@faker-js/faker";

const db = factory({
  bag: {
    id: primaryKey(String),
    name: String,
    brand: String,
    path: String,
    colors: Array,
    price: Number,
    images: Array,
    description: String,
    technicalCharacteristics: {
      racketCapacity: String,
      dimensions: String,
      numberOfInsulatedCompartments: String,
      numberOfStraps: String,
      capacity: String,
      numberOfPockets: Array,
      numberOfHandles: String,
      composition: Array,
    },
  },
  racket: {
    id: primaryKey(String),
    name: String,
    brand: String,
    path: String,
    colors: Array,
    price: Number,
    gripSizes: Array,
    images: Array,
    description: String,
    technicalCharacteristics: {
      headSize: String,
      unstrungWeight: String,
      stringingPattern: String,
      section: String,
      recommendedString: String,
      recommendedGrip: String,
      length: String,
      unstrungBalance: String,
      raStiffness: String,
      composition: String,
      recommendedTension: String,
      strungOrUnstrung: String,
    },
  },
  category: {
    id: primaryKey(String),
    path: String,
    name: String,
  },
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
});

export function loadCategories() {
  categoriesData.forEach((category, index) =>
    db.category.create({
      id: `${index}`,
      name: category.name,
      path: category.path,
    })
  );
}

export function loadRackets() {
  racketsData.forEach((racket, index) =>
    db.racket.create({
      id: `${index}`,
      ...racket,
    })
  );
}

export function loadBags() {
  bagsData.forEach((bag, index) =>
    db.bag.create({
      id: `${index}`,
      ...bag,
    })
  );
}

export function loadUser() {
  for (let index = 0; index < 10; index++) {
    db.user.create({
      id: `${index}`,
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password(),
    });
  }
}

export default db;
