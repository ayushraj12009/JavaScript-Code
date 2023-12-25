//singletone object
const objectName = new Object()
objectName.id = "123"
objectName.email = "ayush@gmail.com"
console.log(objectName);

// non singleTone object
const objectName2 = {}
console.log(objectName2);

// merge two differnt object
const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
const obj3 = Object.assign({}, obj1, obj2) // Object.assign ko use krna hai
console.log(obj3);

//2nd method merge krne ka

const obj4 = {...obj1, ...obj2}
console.log(obj4);

// keys ur value nikal sakte with object
console.log(Object.keys(objectName));
console.log(Object.values(objectName));

