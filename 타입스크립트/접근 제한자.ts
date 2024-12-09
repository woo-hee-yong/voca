//접근 제한자(Access modifier) - public, private, protected

class Car3 {
  name: string = "car";

  color: string;
  static wheels = 4;
  constructor(color:string, name){
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car3.wheels);
  }
}

class Bmw3 extends Car3 {
  constructor(color:string, name){
    super(color, name);
  }
  showName(){
    //console.log(super.name);
  }
}

const z4 = new Bmw3("black", "name");

console.log(z4.showName());
z4.name="zzzz4";