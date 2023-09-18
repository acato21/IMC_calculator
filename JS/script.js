import {error} from "./error.js"
import { wrapper_result } from "./result.js"

const form = document.querySelector('form')
const heigth = document.querySelector('#heigth')
const weigth = document.querySelector('#weigth')

form.onsubmit = (event) => {
    event.preventDefault()

    if(error.verification()){
        return
    }

    wrapper_result.open()

    wrapper_result.result.innerText = `Seu IMC é ${IMC(weigth.value, heigth.value).toFixed(2)}`

}

wrapper_result.exit_result.onclick = () => {

    wrapper_result.close()
}

heigth.oninput = () =>{

    heigth.classList.remove('incorret')
}

weigth.oninput = () => {
    weigth.classList.remove ('incorret')
}

function IMC(weigth,heigth) {

    return weigth / ((heigth / 100) ** 2)
}
