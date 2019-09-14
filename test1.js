const readlineSync = require('readline-sync');

let temp;
const passList = []

const verifyPass = (password, callback) => {

    let errosList = []


    const verifyNumber = (password) => {

        if (!password.match(/[0-9]/g))
            errosList.push("Nao contem numeros")

        callback(password, errosList)

    }

    const vefifyPunctuation = (password) => {

        if (password.match(/[,.;:?!]/g))
            errosList.push("Contem pontuacao")

        verifyNumber(password)

    }

    const verifySpace = (password) => {

        if (password.match(/[ ]/g))
            errosList.push("Contem espaco(s)")

        vefifyPunctuation(password)

    }

    const verifyUpperCase = (password) => {

        if (!password.match(/[A-Z]/g))
            errosList.push("Nao contem letra maiuscula")

        verifySpace(password)

    }

    const verifyLowerCase = (password) => {

        if (!password.match(/[a-z]/g))
            errosList.push("Nao contem letra minuscula")

        verifyUpperCase(password)


    }

    const verifyLength = (password) => {

        if (!(password.length >= 6 && password.length <= 32))
            errosList.push("Tamanho Invalido")

        verifyLowerCase(password)

    }

    verifyLength(password)

}


while (true) {
    temp = readlineSync.question("");

    if (temp === "")
        break

    passList.push(temp)
}


passList.forEach(password => {
    verifyPass(password, (password, error) => {
        if (!!error.length)
            console.log("Senha invalida.")
        else
            console.log("Senha valida.")
    })
})
