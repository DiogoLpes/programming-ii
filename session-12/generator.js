function* list(NumOfItems){
    for (let num=1; num<=NumOfItems; num++){
        yield num;
    }
    console.log("finished")
}

let totalItems = 10;
let items = list(totalItems);

for(const element of items){
    console.log(element);
}


