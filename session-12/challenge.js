    function* iterable(start, ending){
        for (i = start; i<=ending; i++){
            yield i;
        }
    }

const build = iterable(1, 10);
console.log(...build);