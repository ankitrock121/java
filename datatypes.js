// datetypes.js
let DATA_TYPES = {
    STRING: 'Ankit',
    NUMBER: 20,
    BOOLEAN: true,
    BigInt: 900719925474199n, // BigInt literal must end with 'n'
    UNDEFINED: undefined, // those datatypes which define the variable but value is not assigned
    NULL: null, // it represents no value
    OBJECT: { name: 'Ankit' }, // it represents a collection of key-value pairs
    ARRAY: [1, 2, 3], // it represents an ordered list of values
    FUNCTION: function() { return 'Hello'; },    // it represents a block of code designed to perform a particular task
    SYMBOL: Symbol('uniqueIdentifier') // Symbol primitive
};

// To check the datatype of a variable, we use the typeof operator
console.log(typeof DATA_TYPES.STRING);



