import { rest } from "msw";

export const handlers = [
  rest.get("/products", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "Apple",
        },
        {
          id: 2,
          name: "Lemon",
        },
      ])
    );
  }),
];
