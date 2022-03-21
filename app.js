
const { crearArchivo } = require('./helpers/mutiplicar');
const argv = require('./config/yargs');
require('colors')


console.clear();
//console.log(process.argv);
console.log(argv);

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivo( base , listar , hasta)
    .then( ms => console.log(ms.rainbow) )
    .catch( err => console.log(err) );