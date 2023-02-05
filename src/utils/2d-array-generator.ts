const get2dArray = (height = 8, width = 8): number[][] => {
  // ensure paramaters are numbers
  if (typeof height !== "number" || typeof width !== "number") {
    throw Error("function paramaters must be of type number");
  }

  const array = new Array(0);

  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      const y = i;
      const x = j;
      const coordinates = [x, y];
      row.push(coordinates);
    }
    array.push(row);
  }
  return array;
};

export default get2dArray;
