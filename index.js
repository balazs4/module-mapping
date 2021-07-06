import Ajv from 'ajv';
const apply = require('ajv-formats-draft2019');
const ajv = new Ajv();
apply(ajv); // returns ajv instance, allowing chaining

let schema = {
    type: 'string',
    format: 'idn-email',
};
console.log(ajv.validate(schema, 'квіточка@пошта.укр')); // returns true

