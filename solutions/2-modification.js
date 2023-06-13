// BEGIN
export const swap = (array) => {
    if (array.length > 2) {
        let a = array[0];
        let b = array[array.length - 1];
        let c = array.slice(1, array.length-1);
        return [b, ...c, a];
    } else if (array.length == 2) {
        return array.reverse();
    } else {
        return array;
    }
};
// END