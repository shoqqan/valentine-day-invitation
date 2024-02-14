let leftPos = 0
let bottomPos = 0
document.getElementById('yessir').addEventListener('click', () => {
    alert('Что вершит судьбу человечества в этом мире?Некое незримое существо или закон, Может быть это - Любовь? Своего рода опьянение - Да. Безумие - Несомненно! Самое благородное из всех видов опьянения , безумие , внушенное выше, ведущее к божественному ... Так что человек не властен даже над своей волей))')
})
document.getElementById('nooo').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
document.getElementById('nooo').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})