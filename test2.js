const readlineSync = require('readline-sync');


const printDestination = (ddd) => {

    const destinationList = {
        61: "Brasilia",
        71: "Salvador",
        11: "Sao Paulo",
        21: "Rio de Janeiro",
        32: "Juiz de Fora",
        19: "Campinas",
        27: "Vitoria",
        31: "Belo  Horizonte",
    }


    if (!!destinationList[ddd])
        console.log(destinationList[ddd])
    else
        console.log("DDD nao cadastrado")

}


while (true) printDestination(readlineSync.question(""))




