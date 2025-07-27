let  arr   = [ 2, -4,5, 3, -7, 1, -8, 9, -6]


function findCntNegative(arr){
   
    let cnt   = 0;

    for(let  i  =  0 ; i< arr.length ; i++){
        if(arr[i] < 0){
            cnt++
        }
    }

    return cnt;


}

function findCntNegativeOp(arr){

    return arr.filter(num => num < 0).length

}


let res = findCntNegativeOp(arr);
console.log("result : ", res)
