

const button = document.querySelectorAll(".faq-button")


button.forEach(button => {
    button.addEventListener("click", () => {
        deleteActiveClasses()
        button.parentNode.classList.add("active")
    })
})


function deleteActiveClasses(){
    button.forEach(button => {
        button.parentNode.classList.remove("active")
    })
}





























const buttonUp = document.querySelectorAll(".arrow-up")
const buttonDown = document.querySelectorAll(".arrow-down")
const faq = document.querySelectorAll(".faq")

console.log(faq)


// const button = document.querySelectorAll(".faq-button")




buttonDown.forEach(down => {
    down.addEventListener("click", () => {
        faq.classList.add("active")
    })
})


buttonUp.forEach(down => {
    down.addEventListener("click", () => {
        faq.classList.add("active")
    })
})

// button.forEach(button => {
//     button.addEventListener("click", () => {
//         deleteActiveClasses()
//         button.parentNode.classList.add("active")
//     })
// })


function deleteActiveClasses(){
    buttonDown.forEach(down => {
        down.parentNode.classList.remove("active")
    })
}