const person = {
    name:"Mark",
    greet : function(greetings)
    {
        console.log(greetings+","+this.name);
    }
}

const anotherPerson = {name:"Ashish"}

const bindFunction = person.greet.bind(anotherPerson,"Hyy");

bindFunction();