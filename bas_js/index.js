// try catch block

let a = 50
let b = 0

try{
    if(b===0){
        throw("divison by 0 is not possible !")

    }

    console.log(a/b)
}catch(err){
    console.log("some error/exception occured " +err)
}

console.log()

abc.log()


try{
    let name = Window.propmt("Enter Name 5 Chars")

    console.log("hello")

    if(name.length>5){
        throw("Length exceede")
    }
}catch (err){
    console.log(err)
}