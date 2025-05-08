"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const text = "Hello, world!";
console.log(text);
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
console.log("getFirstWord result: " + getFirstWord(text));
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
console.log("getUserNamings result: " + JSON.stringify(getUserNamings({ name: "John", surname: "Doe" })));
function getAllProductNames(a) {
    var _a;
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map(prod => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
}
console.log("getAllProductNames result: " + JSON.stringify(getAllProductNames({ products: [{ name: "Product 1" }, { name: "Product 2" }] })));
function hey1(a) {
    return "hey! i'm " + a.name();
}
hey1({ name: () => "roman", cuteness: 100 });
hey1({ name: () => "vasyl", coolness: 100 });
console.log("hey result: " + hey1({ name: () => "vasyl", cuteness: 100 }));
class Cat {
    constructor(catName, someBool) {
        this.catName = catName;
        this.someBool = someBool;
    }
    name() {
        return this.catName;
    }
}
class Dog {
    constructor(dogName, someNum) {
        this.dogName = dogName;
        this.someNum = someNum;
    }
    name() {
        return this.dogName;
    }
}
function hey2(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
const a = new Cat("snizhok", true);
const b = new Dog("sirko", 333);
console.log(hey2(a));
console.log(hey2(b));
function hey3(a) {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness));
}
hey3({ name: () => "snizhok", type: "cat", cuteness: 100 });
hey3({ name: () => "sirko", type: "dog", coolness: 100 });
console.log("hey2 result: " + hey3({ name: () => "snizhok", type: "cat", cuteness: 100 }));
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
console.log("stringEntries result: " + JSON.stringify(stringEntries({ a: 1, b: 2 })));
function world(a) {
    return __awaiter(this, void 0, void 0, function* () {
        return "*".repeat(a);
    });
}
const hello = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield world(10);
});
hello()
    .then(r => console.log(r))
    .catch(e => console.log("fail"));
const entry = {
    hello: { cvalue: 1 },
    world: { cvalue: { yay: { cvalue: "2" } }
    },
    test: { cvalue: "test" },
};
function sumOfEntries(obj) {
    let sum = 0;
    for (const key in obj) {
        const entry = obj[key];
        if (!entry || entry.cvalue === undefined) {
            sum += 2021;
            continue;
        }
        const value = entry.cvalue;
        if (typeof value === "number") {
            sum += value;
        }
        else if (typeof value === "string") {
            const parsed = Number(value);
            sum += isNaN(parsed) ? 2021 : parsed;
        }
        else if (typeof value === "object") {
            sum += sumOfEntries(value);
        }
        else {
            sum += 2021;
        }
    }
    return sum;
}
console.log("sumOfEntries result: " + sumOfEntries(entry));
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (!elem || typeof elem.cvalue === 'undefined')
            return 2021;
        if (typeof elem.cvalue === 'string')
            return +elem.cvalue || 2021;
        if (typeof elem.cvalue === 'object' && elem.cvalue !== null)
            return summ(elem.cvalue);
        return elem.cvalue;
    });
    console.log("x: " + x);
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log("summ result: " + summ(entry));
