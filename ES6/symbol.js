const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');
// symbol is unique value used for keys or property names in object

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const venky = {};

venky.age = 20;
venky['belt'] = 'orange';
venky['belt'] = 'black';

venky[symbolOne] = 'ryu';
venky[symbolTwo] = 'shaun';

console.log(venky);
