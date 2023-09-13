function isLessThan(conditionNum, arrNum){
    return arrNum < conditionNum
}


function all(array, conditionNum, callBack){
    for(let element of array){
        if(!callBack(conditionNum, element)){
            return false
        }        
    }
    return true
}

arr = [1,5,9]
let res = all(arr, 7, isLessThan)
console.log(res)

