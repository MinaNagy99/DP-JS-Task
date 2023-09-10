class Shape {
    calculateArea() {
      // Base implementation
      return 0;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  function printArea(shape) {
    console.log(`Area: ${shape.calculateArea()}`);
  }
  
  const rectangle = new Rectangle(5, 10);
  const circle = new Circle(3);
  
  printArea(rectangle); 
  printArea(circle);   
    