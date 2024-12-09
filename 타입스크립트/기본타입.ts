/** 기본 타입 */
let car:string = 'bmw';

car = 'benz'

let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

//week1.push(3); // 문자열 배열에 숫자를 넣으려고해서 에러

//튜플 (Tuple)

let b :[string, number];
b = ["z", 1];   //가능
//b = [1, "z"]; // 불가능

b[0].toLowerCase() //문자열에서만 가능
//b[1].toLowerCase() //숫자로 되어있기 때문에 문제가 생김.

// void, never
function sayHello():void{
    console.log('hello');
 }

//never :무한루프나 에러 발생시 타입
function showError():never{
    throw new Error();
}

function infLoop(){
    while(true){

    }
}


//enum
//아무것도 지정안하면 Window : 0 , Ios : 1, Android :2 로 자동 셋팅
enum Os{
    Window  = 'win',
    Ios = 'ios',
    Android = 'and'
}

let myOs:Os;

myOs = Os.Window;


//null, undefined
let c:null = null;
let d:undefined = undefined;