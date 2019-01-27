const argv = require('./config/yargs').argv;
// const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        // console.log(argv.base);
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}
//console.log(argv);


// console.log('Limite', argv.limite);
// console.log('Base', argv.base);


// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1]