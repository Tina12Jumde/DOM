//DOM = Document Object Model

//let a = document.getElementsByClassName("first")

//console.log(a)
//console.log(a.length)
//console.log(a[1])

//let b = document.getElementsByTagName("h1")

//console.log(b)
//console.log(b.length)
//console.log(b[2])
     
//let c = document.getElementById("i1")

//console.log(c)


//b 2 document

//let d = document.getElementsByClassName("second")

//console.log(d)
//console.log(d.length)
//console.log(d[2])

//let e = document.getElementsByTagName("h2")

//console.log(e)
//console.log(e.length)
//console.log(e[3])

//let f = document.getElementById("i2")
 
//console.log(f)


//querySelector

//let g = document.querySelector(".first")
// console.log(g)


 //querySelectorAll

// let h = document.querySelectorAll("#i2")
//  console.log(h)


//changes in HTML and CSS

// innerHTML , innerCSS

//target d1

//console.log (document.getElementById("d1"))

//  document.getElementById("d1").innerHTML ="This is From JS"
 
//  document.getElementById("d1").innerText ="This is InnerText"

 // document.getElementsByTagName("h1")[0].innerHTML = "this is new html"
 
  //accept name from window prompt and display in #name element

 //  let n = prompt("Enter your name !")

 // if(n){
   // document.getElementById("name").innerHTML =`Hello ! ${n}.`
  //}else{
   // document.getElementById("name").innerHTML ="Nothing in Name !"
 // }

 //  document.getElementById("d1").style.background ="blue"
 //  document.getElementById("d1").style.width ="500px"
 //  document.getElementById("d1").style.height ="500px"
 //  document.getElementById("d1").style.borderRadius ="100%"
 //  document.getElementById("d1").style.transform ="skew(50deg)"
 //  document.getElementById("d1").style.animation ="ani1 0.5s ease 50"

   //events based javascript

 //  function hello() {
 //   alert('hello')
 //   document.getElementById("d1").style.background ="blue"
 //  }
 
document.getElementById("btn").onclick = function(){
    document.getElementById("d1").style.background="blue"
     document.getElementById("d1").style.width="500px"
    document.getElementById("d1").style.height="500px"
}

let i = 0
let j = 0
let k = 0

document.getElementById("d1").ondblclick =() =>{
    if(i <= 249){
        i = i + 50
    }else if(j<=249){
        j=j+50
        i=0
    }else if (k<=249){
        k = k+50
        i , j =0
    }else{
        i , j , k = 0
    }

    console.log(i)
    document.getElementById("d1").style.background=`rgb(${i},${j},${k})`
}





























