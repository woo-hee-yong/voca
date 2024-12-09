interface User8{
  name : string;
  age: number;
}

interface Car8{
  name: string;
  color: string;
}

interface Book {
  price: number;
}


const user8: User8 = {name : "a", age: 10};
const car8: Car8 = { name : "bmw", color:"red"};
const book : Book = {price:3000}

function showName2<T extends { name: string}>(data:T): string{
  return data.name;
}

showName2(user8);
showName2(car8);
//showName(book);