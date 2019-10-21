function mergeSort(array) {
  if (array.length == 1) {
    return array
  }

  let a = array.slice(0, Math.ceil(array.length / 2))
  let b = array.slice(Math.ceil(array.length / 2), array.length)

  a = mergeSort(a)
  b = mergeSort(b)

  array = merge(a, b)

  return array
}

function merge(a, b) {
  const numElements = a.length + b.length
  const mergedArray = []

  for (let i = 0; i < numElements; i++) {
    if (a.length <= 0) {
      mergedArray.push(...b)
      break
    }
    if (b.length <= 0) {
      mergedArray.push(...a)
      break
    }
    if (a[0] < b[0]) {
      mergedArray.push(a.shift())
    } else {
      mergedArray.push(b.shift())
    }
  }

  return mergedArray
}

// let arrayTest = [7, 41, 121, 1]

// console.log(arrayTest, 'ARRAY INICIO')
// arrayTest = mergeSort(arrayTest)
// console.log(arrayTest, 'ARRAY FINALL')

function maxVal1(a, n) {
  let max = a[0]
  for (let i = 1; i < n; i++) {
    if (a[i] > max) {
      max = a[i]
    }
  }
  return max
}

// const arrayTest = [74, 4, 2 ,45, 1, 422, 15]
// console.log(maxVal1(arrayTest, arrayTest.length))

function maxVal2(a, init, end) {
  if (end - init <= 1) {
    return max(a[init], a[end])
  }

  else {
    const m = Math.ceil((init + end) / 2)
    const v1 = maxVal2(a, init, m)
    const v2 = maxVal2(a, m + 1, end)

    return max(v1, v2)
  }
}

function max(v1, v2) {
  return v1 > v2 ? v1 : v2
}

// const arrayTest = [5, 55, 4, 21, 91, 47]
// console.log(maxVal2(arrayTest, 0, arrayTest.length - 1))