document.getElementById("f1").onsubmit = (event) => {
    event.preventDefault()

    console.log(event)
}

document.getElementById("i1").onchange =(event) => {
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
} 

document.getElementById("i1").onfocus =(event) => {
  console.log("focus")
}

document.getElementById("i1").onblur =(event) => {
    console.log("blur")
}

document.getElementById("c1").onchange =(event) => {
    console.log(event.target.value)
    document.getElementById("body").style.background = event.target.value
}

document.getElementById("body").onfocus = (event) => {
    document.title = "hello js"
}

document.getElementById("body").onblur = (event) => {
    document.title = "leave ! "
}

document.getElementById("i1").addEventListener("click",()=>{
    alert("clicked !")
})


















