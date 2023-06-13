// BEGIN
const calculateAverage = (arr) => {
    if (arr.length == 0) {
        return null;
    }
    let summa = 0;
    let k = 0;
    for (let i of arr) {
        summa += i;
        k += 1;
    }
    return summa / k;
}


export default calculateAverage;
// END