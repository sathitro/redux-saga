function* generator(i){
    yield 10
    yield 11
    yield 12
    yield i
    yield i + 10
    yield i
}

let gen = generator(10)
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);