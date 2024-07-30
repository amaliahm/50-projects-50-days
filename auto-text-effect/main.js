const text = document.getElementById('text')
const speed = document.getElementById('speed')
const __text = "heyy there, this is 50 projects in 50 days"
let idx = 1
let __speed = 300 / speed.value

function writeText() {
    text.innerHTML = __text.slice(0, idx)
    idx++
    if (idx > __text.length) {
        idx = 1
    }
    setTimeout(writeText, __speed)
}

writeText()

speed.addEventListener('input', (e) => {
    __speed = 300 / e.target.value
})