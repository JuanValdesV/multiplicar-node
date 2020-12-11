//requireds
const fs = require('fs');
//no son nativos
// const fs = require('exxpress');
//los que creamos nosotros
// const fs = require('fs');
let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}\n`)
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejects) => {
        if (!Number(base) && !Number(limite)) {
            rejects(`EL valor introducido no es un número`)
            return
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                rejects(err)
            else
                resolve(`tabla-${ base }-al-${limite}.txt`)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}