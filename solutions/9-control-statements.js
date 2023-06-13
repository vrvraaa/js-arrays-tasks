// BEGIN
const getTotalAmount = (arr, curs) => {
    let result = 0;

    for (let i of arr) {
        
        if (i.split(' ')[0] == curs) {
            result += +i.split(' ')[1];
        }
    }

    return result;
}


export default getTotalAmount;
// END