const readlineSync = require('readline-sync');

let temp;
const passList = []


while (true) {

    temp = readlineSync.question("");

    if (temp === "")
        break

    passList.push(temp)
}


passList.forEach(password => {

    let ok = true;

    (password.length < 6 || password.length > 32) && (ok = false)
    password.match(/[^a-zA-Z0-9]/g) && (ok = false)
    password.match(/[ ,.;:?!]/g) && (ok = false)

    if (ok)
        console.log("Senha valida.")
    else
        console.log("Senha invalida.")

})