
const newForEach = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        callback(array[i], i)
    }
}

const newFill = (array, callback) => {
    let newArr = []
    for (let i = 0; i < array.length; i++){
        array[i] = callback()
        newArr.push(array[i])
    }
    return newArr
}

const newMap = (array, callback) => {
    newArr = []
    for (let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]))
    }
    return newArr
}

const newSome = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])){
            return true
        }
    }
    return false
}

const newFind = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])) {
           return array[i]
        }
    }
}

const newFindIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])) {
            return i
        }
    }
    return -1
}

const newEvery = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if (!callback(array[i])) {
           return false
        }
    }
    return true
}

const newFilter = (array, callback) => {
    let newArr = []

    for (let i = 0; i < array.length; i++){
        if (callback(array[i])) {
           newArr.push(array[i])
        }
    }

    return newArr
}

/** ----------------------------------- NÃO CONSEGUI ------------------------------------------- */
const newConcat = (array) => {
    // let newArr = []
    // for (let i = 0; i < array.length; i++){
    //     newArr.push(array[i])
    // }
    // return newArr
}
/** -------------------------------------------------------------------------------------------- */

const newIncludes = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] === callback){
            return true
        }
    }
    return false
}

const newIndexOf = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] === callback){
            return i
        }
    }
    return -1
}

const newJoin = (array, separador = ',') => {
    let newString = ''

    for (let i = 0; i < array.length; i++){
        if (i === array.length-1){
            newString += array[i]
        }
        else {
            newString += array[i] + separador
        }
    }
    return newString
}

/** ------------------------------------ NÃO CONSEGUI --------------------------------- */
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

const newReduce = (array, callback, acumulador = 0) => {
    // let acc = acumulador
    // let output = 0
    // for (let i = 0; i < array.length; i++){
    //     callback(acc, array[i])
    // }
    // return output
}
// console.log(newReduce(array1, reducer))
/** ------------------------------------------------------------------------------------* */


/** -------------------------------------- EXTRA ---------------------------------------- */

const newSlice = (array, inicio = 0, fim = array.length) => {
    let newArr = []

    for (let i = inicio; i < fim; i++){
        newArr.push(array[i])
    }
    return newArr
}

const newFlat = (array, profundidade = 1) => {
    let newArr = []
    let output = []

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            for (let k = 0; k < array[i][j].length; k++){
                if (profundidade === 1) {
                    break
                }
                newArr.push(array[i][j][k])
            }
            newArr.push(array[i][j])
        }
        newArr.push(array[i])
    }

    for (let i = 0; i < newArr.length - profundidade; i++){
        output.push(newArr[i])
    }
    return output
}

const newFlatMap = (array, callback) => {
    newArr = []
    let output = []

    for (let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]))
    }

    for (let i = 0; i < newArr.length; i++){
        for (let j = 0; j < newArr[i].length; j++){
            output.push(newArr[i][j])
        }
    }
    return output
}
