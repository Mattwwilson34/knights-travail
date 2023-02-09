function findIndex(array: number[][], value: number): [number, number] {
  for (let i = 0; i < array.length; i++) {
    const innerArray = array[i];
    const index = innerArray.indexOf(value);
    if (index !== -1) {
      return [i, index];
    }
  }
  return [-1, -1];
}

export default findIndex

