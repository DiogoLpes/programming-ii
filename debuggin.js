const winston = require("winston");  

const logger = winston.createLogger({  
  level: 'error',  
  transports: [new winston.transports.Console({
     filename:"cenas.log"
  })],  
 
});  

class ValidationError extends Error {  
    constructor(message) {  
      super(message);  
      this.name = message;
      logger.info(`ValidationError ${this.name} created.`); 
    }  
  }  
  
try{
    const cenas = false;
    if(!cenas){
        logger.error("cenas is not valid");
        throw new ValidationError("Bang");
 }

} catch(e) {

    if(e instanceof(ValidationError)){
        logger.error("cenas", e);
        console.info("ValidateError");
    } else {
        logger.error(e);
        console.error("Common error");
    }
}
 


