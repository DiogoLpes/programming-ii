function* generator(num) {
    yield num;
    yield num + 2;
}

const even = generator(3);
console.log(even.next().value);

