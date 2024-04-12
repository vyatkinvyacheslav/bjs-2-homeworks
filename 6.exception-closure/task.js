function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (Number.isNaN(parsedValue)) {
      throw new Error('Невалидное значение');
    }
    return parsedValue;
  }
  
  const parsedValue = parseCount('18.3');
  console.log(typeof parsedValue);
  
  function validateCount(value) {
    try {
      const parseValue = parseCount(value);
      return parseValue;
    } catch (error) {
      return error;
    }
  }
  const invalidValue = validateCount('test');
  console.log(invalidValue.message);


  class Triangle {
    constructor(a, b, c) {
      if ((a + b < c) || (a + c < b) || (b + c < a)) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
      }
    get perimeter() {
    return this.a + this.b + this.c;
  
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +(area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (e) {
      return {
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },
        get area() {
          return 'Ошибка! Треугольник не существует';
        }
      }
    }
  }
  
  const triangle = getTriangle(4, 6, 9);
  console.log(triangle.perimeter);
  console.log(triangle.area);
  
  const invaidTriangle = getTriangle(3, 4, 8);
  console.log(invaidTriangle);
  console.log(invaidTriangle.perimeter);
  console.log(invaidTriangle.area);