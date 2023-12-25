// video number 14

// decelration type
const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4, 5)

//shallow copy means original referance
//deep copy means uska copy original referance nahi 

//Array Methods
myArr.push(6) // this is for adding to original array
myArr.pop() // simple last value ko remove kar dega

console.log(myArr.includes(10)); // basically includes check krta hai present hai ki nahi

console.log(myArr);

// how to merge to aaray
const arr1 = ["A", "B", "C", "D"]
const arr2 = ["E", "F", "G", "H", "I"]

const mergeTwoArray = [...arr1, ...arr2] // dot dot dot laga kar array ka name likh do dono array merge ho jayega
console.log(mergeTwoArray);

