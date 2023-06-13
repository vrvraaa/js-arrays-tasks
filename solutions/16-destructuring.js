const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
  if (locations.length == 0) return null;


  let distance = 999999999;
  let resCoordination;
  let resLocation = '';


  for (let i of locations) {
      let [name, coordinate] = i;
      if (getDistance(coordinate, point) <= distance) {
          distance = getDistance(coordinate, point);
          resCoordination = coordinate;
          resLocation = name;
      }
  }

  
  return [resLocation, resCoordination]
}
// END
