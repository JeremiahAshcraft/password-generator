const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

/* Variables for button that generates passwords and buttons that allow copying passwords to clipboard */

const btnGenerator = document.getElementById("button-generate")
let passwordOne = ''
let passwordTwo = ''
const items = characters.join("")
const inputOne = document.getElementById("input-one")
const inputTwo = document.getElementById("input-two")
const copyPwOne = document.getElementById("pw-one-copy")
const copyPwTwo = document.getElementById("pw-two-copy")

/* Gives functionality to 'Generate passwords' button */

btnGenerator.addEventListener('click', () => {

    passwordOne = ''
    passwordTwo = ''

    for (let i = 0; i < 15; i++) {
        passwordOne += items.charAt(Math.floor(Math.random() * characters.length))
        passwordTwo += items.charAt(Math.floor(Math.random() * characters.length))
    }

    inputOne.value = passwordOne
    inputTwo.value = passwordTwo

})

/* Gives functionality to 'Copy password' buttons */

copyPwOne.addEventListener('click', () => {
    inputOne.select()
    document.execCommand('copy')
})

copyPwTwo.addEventListener('click', () => {
    inputTwo.select()
    document.execCommand('copy')
})