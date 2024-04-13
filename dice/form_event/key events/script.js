let userPassword =[]

document.onkeydown=(event)=>{
    console.log("key down !")
    console.log(event)
    userPassword.push(event.key)
} 

function getPassword (){
    console.log(userPassword)
}

document.onclick =(event) =>{
    console.log(event)
}

document.onmouseover =(event) =>{
    console.log("mouse was here !")
    console.log(event)
}

document.getElementById("p1").onchange =(event) =>{
    console.log(event.target.value)
    userPassword.push(event.target.value)
}

document.onkeyup =(event) =>{
    console.log(event.key)
}

document.onkeypress =(event) =>{
    console.log(event.key)
}



































