//Use the let keyword in an example function
function exampleLetKeyword(){
    let name='Shafi';

    if(name == 'Shafi'){
        name='Mohd '+name;
    }
    return name;
}
console.log(`let keyword example ${exampleConstKeyword()}`);

//Use the const keyword in an example function
function exampleConstKeyword(){
    const name='Mohd Shafi';
    return name;
}
console.log(`Const Keyword example ${exampleConstKeyword()}`);



//Create an arrow function that finds the square of a number
const sqaureOfNumber=(number)=>(number*number);
console.log(`squaring number 4 gives ${sqaureOfNumber(4)}`);



//Create an arrow function that adds two numbers
const addTwoNumbers=(number1,number2)=>(number1+number2);
console.log(`Adding two numbers 2 and 3 gives${addTwoNumbers(2,3)}`);



//Create a multi-line string and then split the string into the corresponding lines and print the lines
const multiLineString=
`Erling Braut Haaland is from Norway
He plays for Manchester city
He plays as a center forward`
const seperateLines=multiLineString.split('\n');
console.log(`Multiline string after splitting by line ${seperateLines}`);


//Create a function that calculates the area of a circle. If the radius of the circle is not provided assume that the default radius is 5. Use the JavaScript default parameter feature to implement the function
const areaOfCircle=(r=5)=>(2*3.14*r*r);
console.log(`Area of cirlce is for radius 6 is${areaOfCircle(6)}`);

//Create a string that prints the name and location of the person in below format:
let person = {
    name: 'Harry Potter',
    location: 'London'
}

const string=person.name+' is located in '+person.location;
console.log(string);


//Show an example where an array is destructured using destructuring assignment
const numbers=[1,2,3];
const [firstNumber,secondNumber,thirdNumber]=numbers;
console.log(`array destruction example- ${firstNumber}`);

//Show an example where an object is destructured using destructuring assignment in the function body
function objectDestruction(){
    let obj={
        name:"shafi",
        location:"Banglore"
        };

    let {name}=obj;
    console.log(`object destruction example- ${name}`);
}
objectDestruction();

//Show an example where a function argument which is an object is destructured inside the parantheses of the function
function objectDestructionInsideFunction(object){
   const {name}=object;
   console.log(`object destruction example inside function- ${name}`);
}

let object={
    name:"shafi",
    location:"Banglore"
};
objectDestructionInsideFunction(object);

//Show an example where enhanced object literals is used.
const company="Mountblue";
const location="Banglore";
const info={
    company,
    location,
};
console.log(info);

//Create a function sum that takes any number of numbers as arguments and calculates the sum of the input numbers using the rest parameter syntax
function sum(...numbers){
    const sumOfNumber=numbers.reduce(function(number,accumulator){
        return number+accumulator;
    },0)
    return sumOfNumber;
}
console.log(`sum function using rest- ${sum(1,2,3,4,5)}`);


//Use the spread syntax to expand an array of numbers and pass the elements of the array as arguments to the sum function created in the previous example
let array=[1,3,4];
console.log(`sum using spread syntax- ${sum(...array)}`);

//use for of loop an iterate through an array
console.log('traverseing through each element using for of loop')
for(const element of array){
    console.log(element);
}

//Iterate through all keys of an object using Object.keys
const obj={
    league:'Premier League',
    country:'England',
}
console.log(`Iterating through keys- ${Object.keys(obj)}`);

//Iterate through all values of an object using Object.keys
console.log(`Iterating through values- ${Object.values(obj)}`);

//Iterate through all the key/value pairs of an object using object.entries
console.log(`iterating through key/value ${Object.entries(obj)}`);