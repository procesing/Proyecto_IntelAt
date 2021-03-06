const loginDiv = document.querySelector('.login-input')
const loginInput = document.querySelector('.login-input input')
const loginInputP = document.getElementById('input-p')
const errorMessage = document.querySelector('.error-msg')
const loginBut = document.querySelector('.login-button')

const actives = () => {
    errorMessage.classList.toggle('msg-active')
    loginInputP.classList.toggle('input-icon')
    loginInputP.classList.toggle('wrong-input')
    loginDiv.classList.toggle('wrong-input-in')
    loginInput.classList.toggle('wrong-input-in')
}

const input = () => {
    loginDiv.addEventListener('click', () => {
        loginInput.focus()
    })

    loginInput.addEventListener('focusin', () => {
        if(loginDiv.classList.contains('wrong-input-in')) {
            actives()
        }
        loginDiv.classList.toggle('input-focused')
    })

    loginInput.addEventListener('focusout', () => {
        loginDiv.classList.toggle('input-focused')
    })

    loginBut.addEventListener('click', () => {
        if(loginInput.value != "test") {
            loginInput.value = ''
            if(!loginDiv.classList.contains('wrong-input-in')) {
                actives()
            }
        } else {
            location.href = 'details.html'
        }
    })
}

input()