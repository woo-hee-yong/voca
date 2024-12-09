// let user:object;
// user = {
//     name : 'xx',
//     age: 30
// }

// console.log(user.name);
// object에는 user에 대한 속성이 없으므로 에러가 발생
// 이런식으로 속성을 매칭해주기 위해서는 interface를 사용


type Score = 'A' | 'B' | 'C' | 'F';     //이터널?

interface User{
    name :string;
    age : number;
    gender?: string;                //있어도 없어도 될때는 ?을 붙여준다.
    readonly birthYear : number;
    [grade:number] : Score;        //grade라는게 의미가 잇는건 아님 (여러개를 받을수 있)
}

let user : User = {
    name : 'xx',
    age : 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
    //s3: 'a'    //Score에 명시된 데이터가 아니며 오류가 발생
}
user.age = 10;
user.gender = "male";
//user.birthYear = 1990; // 읽기전용이므로 에러가 발생
console.log(user.age);


// interface Add{
//     (num1:number, num2:number) : number;
// }

// const add2 : Add = function (x, y){
//     return x + y;
// }

// add2(10,20);

interface IsAdult{
    (age:number): boolean;
}

const ab:IsAdult = (age) => {
    return age > 19;
}

ab(33);

//implements
interface Car {
    color: string;
    wheels : number;
    start() : void;
}


class Bmw implements Car {
    color: string;
    wheels = 4;

    constructor(c: string){
        this.color = c;
    }

    start(){
        console.log('go...');
    }
}

const bmw = new Bmw('green');
console.log(bmw);
bmw.start();

//extends
interface Benz extends Car {
    door : number;
    stop():void;
}

const benz : Benz = {
    door: 5,
    stop() {
        console.log('stop');
    },
    color: "black",
    wheels: 4,
    start: function () {
        console.log("go...");
    }
}

//여러개를 연결
interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Toy {
    name : string;
}

interface ToyCar extends Car, Toy {
    price : number;
}