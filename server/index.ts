import { app } from "./app.ts";
import { url } from "../utils.ts";

console.log(`Server running on ${url()}`);
await app.listen({ port: 8000 });