let users = [  
  { id: 1, name: 'Alice', city: 'Paris' },  
  { id: 2, name: 'Bob', city: 'London' },  
  { id: 3, name: 'Charlie', city: 'Paris' }  
];


users = Map.groupBy(users, ({ city }) => city);

console.log(users)




