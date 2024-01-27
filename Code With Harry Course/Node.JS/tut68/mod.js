console.log('This is Module');

// The function will not get included into index file until we export it

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// This thing is only exporting one function
// module.exports = average;

// If we want to export many functions, i.e in the form of object

module.exports = {
    avg : average, 
    name : 'Prathamesh', 
    age : 19,
    repo : 'Github'
};