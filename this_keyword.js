class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    get_year(){
      console.log(`year : ${this.year}`) // `` like f-string in Python
    }
    get_year_twice = () => this.year*2
  };

let car1 = new Car("phani",2000)
car1.get_year()                         // year : 2000
console.log(car1.get_year_twice())      // 4000
car1.age= 22;   // Car class doesnt have member age

console.log(`age of phani ${car1.age}`) // side effects of JavaScript, even though it doesnt have member it still considers