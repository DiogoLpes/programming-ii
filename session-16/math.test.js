import { subtract, sum } from "./math.js";

test("adds 1 + 2 to equal 3", () => {
    let result = 1 + 2;
    expected(result).toBe(3);
});

test("false-2 = Error()", () => {
    let a = false;
    let b = 2;
    let result = subtract(a, b);
    let expectedResult = -2;
    expected(result).toBe(expectedResult);
});

test("subtract(2,2)=0", () => {
    let a = false;
    let b = 2;
    let result = subtract(a, b);
    let expectedResult = 0;
    expected(result).toBe(expectedResult);
});

test("subtract(false,2)= Error()", () => {
    let a = false;
    let b = 2;
    expected(() => subtract(a, b).toThrow(Error));
});
