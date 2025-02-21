const fs = require('node:fs');  
const winston = require("winston");  

const logger = winston.createLogger({  
  level: 'error',  
  transports: [new winston.transports.File({  
    filename:"poem.txt"
})]
});  

class ValidationError extends Error {  
    constructor(message) {  
      super(message);  
      this.name = message;
      logger.info(`ValidationError ${this.name} created.`); 
    }  
  }  


function countWords(filename) {  
  const data = fs.readFileSync(filename, "utf-8");  
  const words = data.replace(/[^\w\s]/g, '').split(' ');  
  console.log(words);
  return words.length;  
}  

console.log(countWords('poem.txt'));




