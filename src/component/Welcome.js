import {useState} from 'react';
import UserName from "./UserName";

export default function Welcome({age}) {
  //props는 readonly
  const [name, setName] = useState('Mike');
  //const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";
  function changeName() {
    setName(name === "Mike" ? "Jane" : "Mike");
    //setAge(age + 1);
  }
  
  return (
    <div>
      <UserName name={name}/>
      <h2>{name}({age}) : {msg}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
}