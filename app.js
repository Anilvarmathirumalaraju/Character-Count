const textE1 = document.querySelector("#text")
const countE1 = document.querySelector("#character")
textE1.addEventListener("keyup",()=>{
    updatecount()
})
function updatecount(){
     countE1.innerText = textE1.value.length
}
