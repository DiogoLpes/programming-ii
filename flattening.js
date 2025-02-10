const nested = {  
    a: 1,  
    b: { c: 2, d: { e: 3 } },  
    f: [4, 5]  
  };  
  
  function flattening(obj, path = []) {  
    if (typeof obj !== 'object') {  
      console.log(path.join('/'), ':', obj);  
      return;  
    }  
    for (const key in obj) {  
      flattening(obj[key], [...path, key]);  
    }  
  }  
  console.log(nested);  