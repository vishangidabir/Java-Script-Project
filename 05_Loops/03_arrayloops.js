//-------------------for of--------------

// ["","",""]
// [{},{},{}]

// Note :
// for of loop used for array, map --- not for object 
// for in loop used for array, object -- not for map

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);    
}

const greets = "hello world"
for (const greet of greets) {
    console.log(greet);    
}

//----------------map---------------

const map = new Map()
map.set("IN","INDIA")
map.set("CH","CHINA")
map.set("FR","FRANCE")
map.set("IN","INDIA")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);    
}


const myobj = {  //-----------object is not iteratable for - for of
    game1: 'NFS',
    game2: "candy crush"
}

for (const [key, value] of myobj) {
    console.log(key, ':-', value);
    
}

//---------------for in-----------------

const myobj1 = {
    js : "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myobj1) {
    console.log(`${key} shortcut is for ${myobj1[key]}`);    
}

const programming = ['java', 'react', 'javascipt', 'python']

for (const key in programming) {
    console.log(programming[key]) 
}

const map1 = new Map()
map1.set("IN","INDIA")
map1.set("CH","CHINA")
map1.set("FR","FRANCE")
map1.set("IN","INDIA")
// console.log(map);

for (const key in map1) {
    console.log(key);    
}



