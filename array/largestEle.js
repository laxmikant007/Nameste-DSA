


let  arr   = [ -11, -4,5, 3, -7, 1, -8, 9, -6]


function findLargest(arr){
    
    if(arr.length < 2 ){
        return null;
    }

    let  max  = -1;
    let smax = -1 ;
    for(let  i  = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            smax = max;
            max   = arr[i];
        }else if(arr[i] > smax && arr[i] != max){
            smax = arr[i];
        }
    }
    return [max, smax];
}

const  res = findLargest(arr);
console.log("res", res)


function findSmallest(arr){
    
    // let  min  = Infinity;
    // for(let  i  = 0 ; i < arr.length ; i++){
    //    if(arr[i] < min){
    //     min  = arr[i];
    //    }

    // }
    // return min
    
    let min  = Math.min(...arr);

    return min;


}

// const  res = findSmallest(arr);
// console.log("res", res)