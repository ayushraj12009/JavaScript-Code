// video 10
// How java memory works

//Stack me total Primitive data type use hota hai (data ka copy banta hai)
// Heap me non primitive data use hota hai  (original value ke sath apun log use krte hai)

// example of Stack copy kiya tho value change ho gya 
// it is different from orginal or current yehii stack memory hota hai
let objectOne = "Ayush Raj"
console.log(objectOne);

let changingTheObjectOneName = objectOne
changingTheObjectOneName = "Raj Ayush"
console.log(changingTheObjectOneName);


// example of heap jo ki main value ko refeare karta hai
let dataOne = {
    email: "ayush@google.com",
    age: 22
}

let dataTwo = dataOne
dataTwo.email = "raj@gmail.com"

console.log(dataTwo);




