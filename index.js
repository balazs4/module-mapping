<<<<<<< HEAD
const Ajv = require('ajv');
=======
import Ajv from 'ajv';
>>>>>>> 1e49b9e4c52f102ae42bb1939bfb9c30e3b3e4fc
const apply = require('ajv-formats-draft2019');
const ajv = new Ajv();
apply(ajv); // returns ajv instance, allowing chaining

let schema = {
    type: 'string',
    format: 'idn-email',
};
console.log(ajv.validate(schema, 'квіточка@пошта.укр')); // returns true

