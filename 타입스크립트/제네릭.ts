//Generic

//T는 타입파라미터
function getSize<T>(arr: T[]): number{
  return arr.length;
}

const arr1 = [1,2,3];
getSize<number>(arr1); //3

const arr2 = ["a", "b", "c"];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize<boolean>(arr3);

const arr4 = [{}, {}, {name:"Tim"}];


//interface에서 generic
interface Mobile2<T> {
  name: string;
  price : number;
  option: T;
}

// const m1: Mobile2<object> = {
//   name: "s21",
//   price : 1000,
//   option : {
//     color:"red",
//     coupon:false,
//   }
// };

const m1: Mobile2<{color:string, coupon: boolean}> = {
  name: "s21",
  price : 1000,
  option : {
    color:"red",
    coupon:false,
  }
};


const m2: Mobile2<string> = {
  name: "s20",
  price : 1000,
  option : "good",
};
