// BEGIN
const getSameParity = (arr) => {

    let newArr = [];

    for (let item of arr) {
        if (Math.abs(item % 2) === Math.abs(arr[0]) % 2) {
            newArr.push(item);
        }
    }
    return newArr;
}


export default getSameParity;
// END