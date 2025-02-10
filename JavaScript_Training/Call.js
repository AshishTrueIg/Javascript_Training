const person = {
    name:"Ashish Agrawal",
    greet : function(greeting){
        console.log(greeting+','+this.name)
    }
}

const anotherPerson = {name : "Mark"}

person.greet.call(anotherPerson,"Hello")