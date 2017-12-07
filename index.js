function flatten(array) {

  let finalArr = [];
  let finalArrMaker = (array2) => {
    let copyArr = array2.slice();
    if (copyArr.length === 0) {
      return
    }
    if (typeof copyArr[0] === 'object') {
      if (copyArr[0].length === 1) {
        copyArr[0] = copyArr[0][0];
      } else if (copyArr[0].length > 1) {
        if (typeof copyArr[0][0] === 'number') {
          finalArr.push(copyArr[0][0])
          copyArr[0].splice(0, 1)
        } else if (typeof copyArr[0][0] === 'object') {
          copyArr[0] = copyArr[0][0];
        }
      }
    } else if (typeof copyArr[0] === 'number') {
      finalArr.push(copyArr[0])
      copyArr.splice(0, 1)
    }
    finalArrMaker(copyArr)
  }
  finalArrMaker(array)
  return finalArr
};
