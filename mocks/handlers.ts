import db, { loadBags, loadCategories, loadRackets, loadUser } from "./db";
const apiUrl = process.env.NEXT_PUBLIC_API_MOOCKING_URL;

// Load data
loadBags();
loadCategories();
loadRackets();
loadUser();

// Create handlers
export const handlers = [
  ...db.bag.toHandlers("rest", apiUrl),
  ...db.category.toHandlers("rest", apiUrl),
  ...db.racket.toHandlers("rest", apiUrl),
  ...db.user.toHandlers("rest", apiUrl),
];

console.log("[Bags]", db.bag.getAll());
console.log("[Categories]", db.category.getAll());
console.log("[Rackets]", db.racket.getAll());
console.log("[Users]", db.user.getAll());
