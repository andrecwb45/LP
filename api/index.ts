import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

// Suas rotas da API aqui
app.get("/", (c) => {
  return c.json({ message: "AF Devs API" });
});

export default handle(app);