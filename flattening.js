const nested = {  
    a: 1,  
    b: { c: 2, d: { e: 3 } },  
    f: [4, 5]  
  };  






  function traverse(obj, path) {  
    for (const key in obj) {  
      traverse.groupBy(obj => key);

    }  
    return path
  }  
  

  console.log(nested);  