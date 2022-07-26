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
car1.get_year()
console.log(car1.get_year_twice())