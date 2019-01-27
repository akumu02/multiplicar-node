const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', options)
    .command('crear', 'Crea la tabla de multiplicar en base al limite', options)
    .help()
    .argv;

module.exports = {
    argv
}