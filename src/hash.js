import { Hashmap } from "./hashmap.js";

const test = new Hashmap();

console.log("Initial empty hash table:");
test.logStatus();

// Initial population
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("\nAfter initial population:");
test.logStatus();

// Overwriting some values
test.set("apple", "yellow");
test.set("banana", "red");

console.log("\nAfter overwriting some values:");
test.logStatus();

// Adding the entry that should trigger resizing
test.set("moon", "silver");

console.log("\nAfter adding 'moon' (should trigger resize):");
test.logStatus();

// Test the other methods of your hash maps such as get(key), has(key), remove(key), length(), clear(), keys(), values(), and entries() to check if they are still working as expected after expanding your hash map.

test.get("apple");

test.has("banana");

test.remove("carrot");

test.length();

test.clear();

test.keys();

test.values();

test.entries();

console.log("\nAfter testing other methods:");
test.logStatus();
