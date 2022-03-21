const { crearArchivo } = require('./helpers/mutiplicar');



console.clear();
console.log(process.argv);

const [,,arg3= 'base=5'] = process.argv;
const [,base = 5] = arg3.split('=');

console.log(base);

// const  base = 143;
crearArchivo(base)
    .then(ms =>console.log(ms) )
    .catch( err => console.log(err) );