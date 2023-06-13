// BEGIN
export const getMax = (array) => {
    if (array.length == 0) return null;


    let maximum = array[0];


    for (let i of array) {
        if (i >= maximum) {
            maximum = i;
        }
    }


    return maximum;
}
// END