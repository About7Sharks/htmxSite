import { app } from "./app.ts";
import { url } from "../utils.ts";
import { bold, cyan } from "https://deno.land/std@0.194.0/fmt/colors.ts";

console.log(`${bold("Start listening on ")}${cyan(`${url()}`)}`);
await app.listen({ port: 8000 });