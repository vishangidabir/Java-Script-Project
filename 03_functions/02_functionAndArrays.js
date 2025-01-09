function calculateCartPrice(val1, val2, ...number1) {
    return number1
}
// console.log(calculateCartPrice(200,400,500,2000))
//-----------------------------------------------------------

const user = {
    userName : "Vishangi",
    price :199
}

function handleObject(anyObject) {
    console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     userName : "Pratik",
//     price :3999
// })

//-----------------------------------------------------------------

const mynewArray = [200,400,500,600]

function returnsecondValue(getArray) {
    return getArray[2]
}
console.log(returnsecondValue(mynewArray));

