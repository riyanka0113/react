//primitive
let age: number = 12;

let userName: string = "riyanka";

let isInstructor: boolean = false;

//more complex

let hobbies : string[];

hobbies = ["reading", "writting"];

let person: {
    name: string,
    age: number
}

person = {
    name : "Riyanka",
    age : 20
}

let people : {
    name: string,
    age: number
}[];

//type inferenece
let course : string | number = "TypeScript Course"

course = 12345

//type alias

type person = {
    name: string,
    age: number
};

let Person: person;

let People : person[];

//function & type
function add(a:number, b:number){
    return a+b;
}

function printOutput(value:any){
    console.log(value);
}

//generics

function insertAtBegining<T>(array:T[], value:T){
    const newArray = [value, ...array];
    return newArray;
}

const updatedArray = insertAtBegining([1,2,3], -1); //[-1,1,2,3]
const updatedStringArray = insertAtBegining(['a','b','c'], 'd');