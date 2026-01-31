import { strict as assert } from "node:assert";
import getFunction from "../functions.js";

const get = getFunction();

assert(get({ hello: "world" }, "hello") === "world");
assert(get({}, "hello", "kitty") === "kitty");
assert(get({ hello: "world" }, "hello", "kitty") === "world");
