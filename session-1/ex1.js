const array = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7];


function findDuplicates(array){
  let findDuplicates = []
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1 ; j < array.length; j++){
      if (array[i] == array[j] && !findDuplicates.includes(array[i])) {
        findDuplicates.push(array[i]);
      }
    }
  }
  return findDuplicates;
}
const result = findDuplicates(array);
console.log("Duplicate elements:", result);