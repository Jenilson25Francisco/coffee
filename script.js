const modal = document.querySelector(".modal")
const mask = document.querySelector(".mask-2")

function openModal(){
   modal.style.left = '50%'
   mask.style.visibility = 'visible'
}

function closeModal(){
    modal.style.left = '-30%'
   mask.style.visibility = 'hidden'
}