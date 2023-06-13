// BEGIN
const addPrefix = (array, pref) => {
    let newArray = [];
    for (let i of array) {
        let a = pref + ' ' + i;
        newArray.push(a);
    }
    return newArray;
}


export default addPrefix;
// END
