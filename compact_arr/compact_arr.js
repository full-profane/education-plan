function compactArr(array) {
  let result = [];
  for (var i =0; i <= array.length - 1; i++) {
    console.log(typeof(array[i]));
    if(typeof(array[i]) === 'number') {
      result.push(array[i]);
      console.log(result);
    }
  }
  return result;
}
