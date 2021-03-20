function removeValue(array, ...args) {
let result = [];
  for (let i = 0; i <= array.length-1; i++) {
    if (args.includes(array[i]) !== true) {
      result.push(array[i]);
    }
  }
  return result ;
}
