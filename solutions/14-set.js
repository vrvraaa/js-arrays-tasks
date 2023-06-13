// BEGIN
const countUniqChars = (stroka) => {
    let setArray = new Set(stroka.split(''));
    let newArray = Array.from(setArray);
    return newArray.length;
}


export default countUniqChars;
// END