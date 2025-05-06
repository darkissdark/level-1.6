const text = "Hello, world!";

console.log(text);

function getFirstWord(a: string): number {
	return a.split(/ +/)[0].length;
}

console.log("getFirstWord result: " + getFirstWord(text));

function getUserNamings(a: { name: string; surname: string }): { fullname: string; initials: string } {
  return { 
		fullname: a.name + " " + a.surname, 
		initials: a.name[0] + "." + a.surname[0] 
	};
}

console.log("getUserNamings result: " + JSON.stringify(getUserNamings({ name: "John", surname: "Doe" })));

function getAllProductNames(a: { products?: Array<{ name: string }> }): Array<string> {
  return a?.products?.map(prod => prod?.name) || [];
}

console.log("getAllProductNames result: " + JSON.stringify(getAllProductNames({ products: [{ name: "Product 1" }, { name: "Product 2" }] })));

function hey1(a: { name: () => string; cuteness?: number; coolness?: number }): string {
    return "hey! i'm " + a.name();
}
hey1({name: () => "roman", cuteness: 100})
hey1({ name: () => "vasyl", coolness: 100 })

console.log("hey result: " + hey1({ name: () => "vasyl", cuteness: 100 }));

interface AbstractPet {
  name(): string;
}

class Cat implements AbstractPet {
  constructor(private catName: string, public someBool: boolean) {}

  name(): string {
    return this.catName;
  }
}

class Dog implements AbstractPet {
  constructor(private dogName: string, public someNum: number) {}

  name(): string {
    return this.dogName;
  }
}

function hey2(abstractPet: AbstractPet): string {
  return "hey! i'm " + abstractPet.name();
}

const a = new Cat("snizhok", true);
const b = new Dog("sirko", 333);

console.log(hey2(a));
console.log(hey2(b));

function hey3(a: { name: () => string; type: string; cuteness?: number; coolness?: number }): string {
    return "hey! i'm " + a.name()
		 + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
}
hey3({name: () => "snizhok", type: "cat", cuteness: 100})
hey3({ name: () => "sirko", type: "dog", coolness: 100 })

console.log("hey2 result: " + hey3({ name: () => "snizhok", type: "cat", cuteness: 100 }));

function stringEntries(a: string[] | Record<string, unknown>): string[] {
   return Array.isArray(a) ? a : Object.keys(a)
}

console.log("stringEntries result: " + JSON.stringify(stringEntries({ a: 1, b: 2 })));

async function world(a: number): Promise<string> {
    return "*".repeat(a);
}

const hello = async (): Promise<string> => {
    return await world(10);
}

hello()
    .then(r => console.log(r))
    .catch(e => console.log("fail"));