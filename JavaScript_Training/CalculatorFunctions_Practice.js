const add=(a,b)=>
{
    return a+b;
}


function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return a/b;
}

function subtract(a,b)
{
    return a-b;
}

// console.log(subtract(10,8));
// console.log(add(10,18));
// console.log(multiply(10,18));
// console.log(divide(10,18));


function calculator(a,b,operation)
{
    console.log( operation(a,b));
}

calculator(2,3,add);
