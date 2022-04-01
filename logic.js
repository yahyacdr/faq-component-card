let qSection = document.querySelectorAll('.q-section')
let qTitle = document.querySelectorAll('.fat-title')
let img = document.querySelector('.img')
let imgs = Array.from(img.children)
console.log(img, imgs)
qSection.forEach(function (q) {
    q.onclick = function () {
        q.classList.toggle('certain')
        q.children[0].children[0].classList.toggle('bold')
        q.children[0].children[1].classList.toggle('rotate')
    }
})
if (window.matchMedia("(min-width: 1024px) and (min-height: 600px)").matches) {
}