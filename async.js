
const despedida = () => {
    console.log("Terminando proceso...")
}
const greeting = (name, callback) =>
{
    setTimeout(() => {
        console.log(`Hola ${name}`)
        callback(name, despedida)
    }, 5000);
    
}

const goodBye = (name, callback) =>
{
    setTimeout(() => {
    //callback(`Adios ${name}`)
    console.log(`Adios ${name}`)
    callback()
}, 3000);
}

console.log("Iniciando programa")
greeting("Martha",goodBye)
//goodBye("Martha", console.log)
//console.log("Finalizando programa")


/*

const callback = () => {
    console.log("esto se está ejecutando en un segundo proceso")
}

console.log("Iniciando proceso...")


setTimeout(callback, 5000);

console.log("Esto se esta ejecutando en el proceso principal")

console.log("Terminando proceso...") */