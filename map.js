let users = [  
  { id: 1, name: 'Alice', city: 'Paris' },  
  { id: 2, name: 'Bob', city: 'London' },  
  { id: 3, name: 'Charlie', city: 'Paris' }  
];


let usersmap = new Map();
users.forEach((key) => usersmap.set(value.city));
console.info(usersmap);



function deepEqual(obj1, obj2) {  
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {  
      return obj1 === obj2;  
    }  
    const keys1 = Object.keys(obj1);  
    const keys2 = Object.keys(obj2);  
    if (keys1.length !== keys2.length) return false;  
    return keys1.every(key => deepEqual(obj1[key], obj2[key]));  
  }  