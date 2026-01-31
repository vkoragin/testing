import { strict as assert } from "node:assert";
import getFunction from "./functions.js";

const get = getFunction();

assert.equal(get({ hello: "world" }, "hello"), "world");
assert.equal(get({}, "hello", "kitty"), "kitty");
assert.equal(get({ hello: "world" }, "hello", "kitty"), "world");
