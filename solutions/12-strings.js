// BEGIN
const makeCensored = (stroka, arr) => {

    let result = [];


    for (let i of stroka.split(' ')) {
        if (arr.indexOf(i) != -1) {
            result.push('$#%!');
        } 
        
        else {
            result.push(i);
        }
    }


    return result.join(' ');
}


export default makeCensored;
// END