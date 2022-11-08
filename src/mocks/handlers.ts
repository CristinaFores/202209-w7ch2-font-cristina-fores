import { rest } from "msw";
import mockRobotsResponse from "./mockRobotsResponse";

const url = process.env.REACT_APP_URL_API;
export const handlers = [
  rest.get(`${url}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ robots: mockRobotsResponse }));
  }),

  rest.delete(`${url}/robot/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json({ id }));
  }),
];
