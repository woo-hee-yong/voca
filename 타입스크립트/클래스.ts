class Car2{
  // color:string;
  // constructor(color:string){
  //   this.color = color;
  // }

  //멤버변수를 생성하지 않을때 방법 public or readonly
  constructor(readonly color:string){
    this.color = color;
  }

  start() {
    console.log("start");
  }
}

const bmw2 = new Car2("red");

