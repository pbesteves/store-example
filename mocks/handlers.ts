import { rest } from "msw";
import * as bagsDB from "./data/bags";
import * as racketsDB from "./data/rackets";
import * as menusDB from "./data/menus";

const apiUrl = process.env.NEXT_PUBLIC_API_MOOCKING_URL;

export const handlers = [
  rest.get(`${apiUrl}/menus`, async (req, res, ctx) => {
    const menus = await menusDB.readMany(["987123", "987122", "987124"]);
    return res(ctx.json(menus));
  }),

  rest.get(`${apiUrl}/bags`, async (req, res, ctx) => {
    const bags = await bagsDB.readMany([
      "751215",
      "751201",
      "801040",
      "800600",
    ]);
    return res(ctx.json(bags));
  }),

  rest.get(`${apiUrl}/bags/:id`, async (req, res, ctx) => {
    const { id } = req.params;

    if (typeof id !== "string") {
      return res(
        ctx.status(400),
        ctx.json({ status: 400, messagE: "Invalid product ID" })
      );
    }

    const bag = await bagsDB.read(id);
    if (bag) {
      return res(ctx.json(bag));
    }

    return res(
      ctx.status(404),
      ctx.json({ status: 404, messagE: "Bag not found" })
    );
  }),

  rest.get(`${apiUrl}/rackets`, async (req, res, ctx) => {
    const rackets = await racketsDB.readMany([
      "101464",
      "101406",
      "036500",
      "043700",
    ]);
    return res(ctx.json(rackets));
  }),

  rest.get(`${apiUrl}/rackets/:id`, async (req, res, ctx) => {
    const { id } = req.params;

    if (typeof id !== "string") {
      return res(
        ctx.status(400),
        ctx.json({ status: 400, messagE: "Invalid product ID" })
      );
    }

    const racket = await racketsDB.read(id);
    if (racket) {
      return res(ctx.json(racket));
    }

    return res(
      ctx.status(404),
      ctx.json({ status: 404, messagE: "Racket not found" })
    );
  }),
];
