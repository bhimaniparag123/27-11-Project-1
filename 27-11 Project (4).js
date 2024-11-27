class Shape {
    static circleArea(radius) {
      const pi = 3.14;
      return pi * radius * radius;
    }
    static rectangleArea(width, height) {
      return width * height;  
    }
  }
  
  const radius = 5;
  const width = 24;
  const height = 13;
  
  const circleArea = Shape.circleArea(radius);
  console.log(`The area of the circle with radius ${radius} is: ${circleArea}`);
  const rectangleArea = Shape.rectangleArea(width, height);
  console.log(`The area of the rectangle with width ${width} and height ${height} is: ${rectangleArea}`);
  