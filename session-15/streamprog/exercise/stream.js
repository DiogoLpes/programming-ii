import { createReadStream } from "node:fs";


export class Transform{
    #filepath;
    constructor(filepath){
        this.#filepath = filepath;
    }

    start(){
        const stream = createReadStream(this.#filepath,"utf-8");
        stream.on("data",(chunk) =>console.log(`Chunk: ${chunk.length}`));
    }
}