const person = {
    name : "Mark",
    greet : function(greetings)
    {
        console.log(greetings+","+this.name)
    }
}

const anotherPerson = {
    name: "Ashish"
}

//apply method is same as call method the only difference is we pass arguements as an array
person.greet.apply(anotherPerson,["Hi"])