interface IExample {
    id: number;
    name: string;
    test: () => void;
}


class Example implements IExample {
    id: number;
    name: string
    test: () => { }
}

const stringArray: string[] = ['123', 'asdf'];
const objArray: IExample[] = [new Example(), new Example()];
const objArrayTwo: Array<Example> = [new Example(), new Example()];


const num: number[] = [1,2,3,4,5]
num.map(x => x * 2);
num.filter(x => x % 2 === 0);

let initialValue: number = 0
num.reduce((prev, cur) => prev + cur, initialValue)


let a,b,rest;
let x = [1,10,20,30,40,50];
[a,b,...rest] = x;
[a,b] = x //a = 1, b = 10

let c, d;
({c, d} = {c: 10, d: 20})
