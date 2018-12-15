import { add } from "@src/logic/calc";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
