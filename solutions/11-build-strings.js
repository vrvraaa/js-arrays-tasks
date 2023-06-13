// BEGIN
const buildDefinitionList = (array) => {
    if (array.length == 0 || array[0].length == 0) {
        return '';
    }

    let string = '<dl>';


    for (let i of array) {
        string += `<dt>${i[0]}</dt><dd>${i[1]}</dd>`
    }
    
    string += '</dl>'
    return string;
}


export default buildDefinitionList;

// END