const argv = require('yargs')
            .option('b',{
                alias       : 'base',
                type        : 'number',
                demandOption: true,
                describe    : 'base de la tabla de multiplicar'
            })
            .option('l',{
                alias   : 'listar',
                type    : 'boolean',
                default :  false,
                describe:  'lista la tabla'
            })
            .option('h',{
                alias   :'hasta',
                type    :'number',
                default : 10,
                describe:'limite'
            })
            .check( ( argv ,options )=> {
                if( isNaN(argv.b)){
                    throw 'la base es requeridad';
                }
                return true;
            } )
            .argv;
            
module.exports = argv;