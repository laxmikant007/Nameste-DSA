
// (value){
//     console.log(`this is  value : ${value} `)
// }()

((a=>{
    console.log("IIFY FUNCTION")
}))()


function square(x){
  return x * x
}

let a   = square(8);
console.log(a)


function checkElegible(age){
//    if(age >= 18 && age > 0){
//     return true
//    }else{
//     return false
//    }
   return age >= 18 ? true : false

}

let  x = 28;

console.log(checkElegible(x));


function evenOrOdd(val){
   return  val % 2 == 0 ? true : false  
}

let  val = 28
console.log(evenOrOdd(val))



