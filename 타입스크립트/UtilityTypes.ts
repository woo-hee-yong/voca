// keyof

interface User10 {
  id: number;
  name: string;
  get: number;
  gender: "m" | "f";
}




type UserKey = keyof User10; // 'id' | 'name' | 'age'| 'gender'
const uk:UserKey = "id";

//Partial<T>
// Partial로 감싸게 되면 아래모습과 같다.
// interface User10 {
//   id?: number;
//   name?: string;
//   get?: number;
//   gender?: "m" | "f";
// }
let admin:Partial<User10> = {
  id: 1,
  name: "Bob",
  //job : "",
}


//Required<T>
//모든 프로퍼티를 필수로 바꿈
interface User11{
  id: number;
  name: string;
  age?:number;
}

let admin2: Required<User11> = {
  id: 1,
  name:"Bob",
  age:10
}


//Readonly<T>
interface User12{
  id: number;
  name: string;
  age?:number;
}

// 초기화는 가능
let admin3: Readonly<User12> = {
  id: 1,
  name:"Bob",
  age:10
}

// admin3.id = 4; 에러발생 초기화만 가능하고 readonly로 변경은 불가.



//Record<K,T>
interface Score2{
  "1": "A" | "B" | "C" | "D";
  "2": "A" | "B" | "C" | "D";
  "3": "A" | "B" | "C" | "D";
  "4": "A" | "B" | "C" | "D";
}

const score:Score2={
    1 : "A",
    2 : "C",
    3 : "B",
    4 : "D",
}
//####### 2번예제
type Grade3 = "1" | "2"| "3" |"4";
type Score3 = "A" | "B"| "C" |"D" | "F";


const score2 : Record<Grade3, Score3> ={
    1 : "A",
    2 : "C",
    3 : "B",
    4 : "D",
};


// #### 3번예제
interface User13 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User13){
  const result: Record<keyof User13, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };

  return result;
}



// Pick<T, K> 특정만 사용, Omit<T,K> 특정을 제외하고 사용
interface User14 {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin4:Pick<User14, "id" | "name"> = {
  id: 0,
  name: "Bob",
}

const admin5:Omit<User14, "age" | "gender"> = {
  id: 0,
  name: "Bob",
}

//Exclude<T1,T2>
//NonNullable<Type>
