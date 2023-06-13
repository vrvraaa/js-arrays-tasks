// BEGIN
export const calculateSum = (arr) => {
    let summa = 0;
    for (let i of arr) {
        if (i % 3 == 0) {
            summa += i;
        }
    }
    return summa;
}
// END