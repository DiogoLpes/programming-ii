let users = new Map([  
  { id: 1, name: 'Alice', city: 'Paris' },  
  { id: 2, name: 'Bob', city: 'London' },  
  { id: 3, name: 'Charlie', city: 'Paris' }  
]);

users = Object.groupBy(users, ({ city }) => city);
console.log(users)




