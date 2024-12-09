//추상클래스는 new로는 생성 불가능 
//상속을 통해서만 사용가능.

abstract class Car7 {
  color:string;
  constructor(color: string){
    this.color = color;
  }
  start() {
    console.log("start");
  }
  abstract doSomething():void;

  
}

//무조건 추상클래스를 만드러줘야 한다. (doSomething)
class Bmw7 extends Car7{
  constructor(color:string){
    super(color);
  }
  doSomething(){
    alert("3");
  }
}

const z5 = new Bmw7("black");

