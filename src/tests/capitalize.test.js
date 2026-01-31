import { strict as assert } from "node:assert";
import { capitalize } from "../capitalize.js";

assert(capitalize("") === "");
assert(capitalize("hello") === "Hello");
