
const person = {
    name:"Ashish Agrawal",
    age: 35,
    city: "Indore",
    country: "India",
    hobbies:["Volleyaball" , "TableTennis"]
}

// console.log(`My name is ${person.name} and my age is ${person.age} and the city i live in ${person.city} and country is ${person.country}`);

person.hobbies.push("Cricket")
person.hobbies.pop();
// person.hobbies.forEach((hobby)=>console.log(hobby))

const [firstHobby ,secondHobby]=person.hobbies;  //Destructing of Array
// console.log(secondHobby)

console.log(person)
delete person.age;
console.log(person)