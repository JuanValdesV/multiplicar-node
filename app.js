const argv = require("./config/yangs").argv

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar")

let comando = argv._[0]

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
        break
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e))
        break
    default:
        console.log("comando no econocido")
}



// console.log(argv)


// let base = "abc"

// console.log(process.argv)
// let argv2 = process.argv

// console.log("limite", argv.limite)
// console.log(argv2)
// let param = argv[[2]]
// let base = param.split("=")[1]