//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('======================='.magenta);
    console.log(`====tabla de ${ base }===`.magenta);
    console.log('======================='.magenta);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data.magenta);

        // fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

        //     if (err) reject(err);
        //     else
        //         resolve(`Tabla-${ base }.txt`);
        // });

    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`Tabla-${ base }.txt`.magenta);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}