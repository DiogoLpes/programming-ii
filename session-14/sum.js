const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Sum = arr. reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

export const Everage = arr. reduce((accumulator, currentValue) => accumulator + currentValue / arr.length, 0); 

export function Median (arr) {
    const meio = Math.floor(arr.length / 2); // Encontra o índice do meio
    if (arr.length % 2 === 0) {
        return (arr[meio - 1] + arr[meio]) / 2;
    } else {
        return arr[meio];
    }
}

