// Intersection Types
// 여러타입을 합쳐서 사용 and을 의미
interface Car6 {
  name: string;
  start():void;
}

interface Toy6{
  name: string;
  color: string;
  price : number;
}

const toyCar3 : Toy6 & Car6 = {
  name : "타요",
  start(){},
  color:"blue",
  price:1000,
}