

function findEle(ele){
    for(let  i  = 0 ; i< arr.length; i++){
        console.log(`ele ${arr[i]} idx ${i}`)
        if(arr[i] == ele){
            return i;
        }
    }
}

let  arr   = [ 2, 4,5, 3, 7, 1, 8, 9, 6]
const  ele = 5

function findeleOp(ele){
    // let  idx   = arr.includes(ele);
        let  idx   = arr.indexOf(ele);

    console.log("this is idx in optimised", idx)
}

findeleOp(ele)


// console.log(`this is index  of  ele ${ele} ` , findEle(ele))