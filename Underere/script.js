
function substractDates(){
    let initialDate = new Date(document.querySelector('#initialDate').value)
    let finalDate = new Date(document.querySelector('#finalDate').value)
    let result = ((finalDate - initialDate) / 1000 / 24 / 60 / 60)
    let howMuchVeicles = document.querySelector('#howMuchVeicles').value
    let mensalValue = document.querySelector('#mensalValue').value

    let mounthPlace = document.querySelector('#mounth')
    mounthPlace.innerHTML = `R$${(howMuchVeicles*mensalValue).toFixed(2)}`
    let or = document.querySelector('#or')
    or.innerHTML = ` ou R$${(howMuchVeicles*mensalValue*12).toFixed(2)}/Ano`

    let time = document.querySelector('#time')
    time.innerHTML = `${result} dias`

    let first = document.querySelector('#first')
    first.innerHTML = `${((mensalValue/30)*result*howMuchVeicles).toFixed(2)}`

    let daily = document.querySelector('#daily')
    daily.innerHTML = `R$${((mensalValue/30)).toFixed(2)}`

    let dateAlertInformated = document.querySelector('#finalDate').value.split('-')
    let dateAlertOrganized = [
        dateAlertInformated[2],
        dateAlertInformated[1],
        dateAlertInformated[0],
    ]
    let dateAlertFormated = dateAlertOrganized.join('/')

    let alertDatePlace = document.querySelector('#alertDatePlace')
    alertDatePlace.innerHTML = `${dateAlertFormated}`

    if(result <= 25 || result >= 40){
        document.querySelector("#alertDatePlace").classList.remove('dateAlertSafe')
        document.querySelector("#alertDatePlace").classList.add('dateAlertWarning')
        let daysLeft = document.querySelector('#time').classList.add('red')
    }else{
        document.querySelector("#alertDatePlace").classList.remove('dateAlertWarning')
        document.querySelector("#alertDatePlace").classList.add('dateAlertSafe')
        let daysLeft = document.querySelector('#time').classList.remove('red')
    }


    return result
}

function changeMensalValue(newMensalValue){
    let mensalValue = document.querySelector('#mensalValue')
    mensalValue.value = newMensalValue.toFixed(2)
}

function showEE() {
        document.querySelector('#easterEgg').classList.remove('easterEggHidden')
        document.querySelector('#easterEgg').classList.add('easterEgg')
}


function hideEE() {
    document.querySelector('#easterEgg').classList.remove('easterEgg')
    document.querySelector('#easterEgg').classList.add('easterEggHidden')
}