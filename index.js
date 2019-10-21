function mergeSort(array){
  if(array.length == 1){
    return array
  }

  let a = array.slice(0, Math.ceil(array.length / 2))
  let b = array.slice(Math.ceil(array.length / 2), array.length)

  a = mergeSort(a)
  b = mergeSort(b)

  array = merge(a,b)

  return array
}

function merge(a, b){
  const numElements = a.length + b.length
  const mergedArray = []

  for(let i = 0; i < numElements; i++){
    if(a.length <= 0){
      mergedArray.push(...b)
      break
    }
    if(b.length <= 0){
      mergedArray.push(...a)
      break
    }
    if(a[0] < b[0]){
      mergedArray.push(a.shift())
    } else {
      mergedArray.push(b.shift())
    }
  }

  return mergedArray
}

let arrayTest = [7, 41, 121, 1]

console.log(arrayTest, 'ARRAY INICIO')
arrayTest = mergeSort(arrayTest)
console.log(arrayTest, 'ARRAY FINALL')