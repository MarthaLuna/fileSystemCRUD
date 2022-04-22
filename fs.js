const { create } = require("domain");
const fs = require("fs");


const createFile = (directoryPath, fileName, data) => {

    fs.writeFile(`${directoryPath}/${fileName}`, data, (error)=> {
        if(error)
        {
            console.log("no se pudo crear el archivo", error)
        }
        else
        {
            console.log("archivo creado exitosamente")
        }
    })
}

const readerFile = (directoryPath, fileName) => 
{
fs.readFile(`${directoryPath}/${fileName}`,(error, data) => {
    if(error){
            console.log("Hubo un error", error)
    }
    else{
            console.log(data.toString())
    }
}) 
}

const updateFile = (directoryPath, fileName, data) => {

    fs.writeFile(`${directoryPath}/${fileName}`, data, (error)=> {
        if(error)
        {
            console.log("no se pudo actualizar el archivo", error)
        }
        else
        {
            console.log("archivo actualizado exitosamente")
        }
    })
}

const deleteFile = (directoryPath, fileName) => {
    fs.unlink(`${directoryPath}/${fileName}`, (error)=>{
        if(error){
                console.log("No se pudo eliminar el archivo", error)
        }
        else{
                console.log("Se elimino el archivo exitosamente")
        }
    })

}

let directory = "";
let fileN = "";
let dataIn = "";
const pedirDatos = (opcion) =>{
    directory = process.env.DIRECTORY;
    console.log(`Directory: ${directory}`)
    fileN = process.env.FILEN;
    console.log(`File Name: ${fileN}`)
    if(opcion == 1 || opcion == 3)
    {
        dataIn = process.env.DATAIN;
        console.log(`Data to write: ${dataIn}`)
    }
}
const opcion = process.env.OPCION
console.log("Su opcion elegida fue: ")
if(opcion == 1)
{
    console.log("Crear");
    pedirDatos(1);
    createFile(directory, fileN, dataIn)
}
else if(opcion == 2)
{
    console.log("Leer");
    pedirDatos(2);
    readerFile(directory, fileN)
}
else if(opcion == 3)
{
    console.log("Actualizar");
    pedirDatos(3);
    updateFile(directory, fileN, dataIn)
}
else if(opcion == 4)
{
    console.log("Eliminar");
    pedirDatos(4);
    deleteFile(directory, fileN)
}




/*fs.mkdir(`${__dirname}/newdir`, (error)=>{
    if(error){
            console.log("No se pudo crear el directorio", error)
    }
    else{
            console.log("Se creo exitosamente el directorio ")
    }
})*/