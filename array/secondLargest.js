
let  arr   = [ 11, -4,5, 3, -7, 1, -8, 9, -6]



// function secondLar(arr){

//     let  max   = Math.max(...arr);

//     console.log("max", max)

//     arr = arr.filter(val => val !=max);

//     let  smax  = Math.max(...arr);

//     return smax;

// }


function secondLar(arr){

    let  max   = Math.max(...arr);

    console.log("max", max)

    arr = arr.filter(val => val !=max);

    let  smax  = Math.max(...arr);

    return smax;

}

(()=>{
    let  smax  = secondLar(arr);
    console.log("res", smax)
})()