arr = [1, 2, 4, 5, 6, 7, 8, 9];

function* evenNumber(arr) {
    for (number of arr) {
        if (number % 2 == 0) {
            yield number;
        }
    }
}
const generator = evenNumber(arr);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
