function mergeArr (array1, array2) {
  let connecArr = array1.concat(array2);
  let newArr = [];
  for (let i = 0; i < connecArr.length; i++){
    if (newArr.includes(connecArr[i]) === false) {
      newArr.push(connecArr[i]);
    }
  }
  return newArr;
}
