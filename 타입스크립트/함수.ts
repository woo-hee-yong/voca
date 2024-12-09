function add(num1: number, num2: number) : number{
  return num1 + num2;
}

//선택적 매개변수
function hello(name?: string): string{
  return `Hello, ${name || "world"}`;
}

function hello2(name:string = "world"): string{
  return `Hello, ${name}`;
}

const result  = hello();
const result2 = hello("Sam");
//const result3 = hello(123);


//선택적 매개변수를 앞에 먼저 올수 없다.
function hello3(name : string, age?:number): string{
  if(age !== undefined){
    return `Hello, ${name}. You age ${age}.`;
  }else{
    return `Hello, ${name}`;
  }
}

console.log(hello3("Sam"));
console.log(hello3("Sam", 30));

// 점3개로 표시하면 전달 받은 매개변수를 배열로 나타내게 할 수 잇다.
function add2(...nums: number[]){
  return nums.reduce((result, num) => result + num, 0);
}

add2(1,2,3);// 6
add2(1,2,3,4,5,7,8,9,10); //55

//this와 관련된 내용
interface User2 {
  name: string;
}

const Sam : User2 = {name: 'Sam'}
function showName(this:User2, age:number, gender:'m' | 'f') {
  console.log(this.name, age, gender);
}
const as = showName.bind(Sam);
as(30, 'm');

// 유효성 검사를 위한 함수
interface User3 {
  name : string;
  age: number;
}


//오버로드를 해서 처리
function join(name: string, age: string): string;
function join(name: string, age: number): User3;
function join(name: string, age: number | string): User3 | string{
  if(typeof age === "number"){
    return {
      name, 
      age,
    };
  }else {
    return "나이는 숫자로 입력해주세요.";
  }
}

const sam : User3 = join("Sam", 30);
const jane : string = join("Jane", "30");

console.log(sam);
console.log(jane);