import World from "./World";
import styles from "./Hello.module.css";
export default function Hello() {

  function showName() {
    console.log("Mike");
  }

  function showAge(age) {
    console.log(age);
  }

  function showText(text){
    console.log(text);

  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button onClick={() => { showAge(30); }}>Show age</button>
      <input type="text" onChange={(e) => {
        showText(e.target.value);
      }}/>
    </div>
  )

}

/*
const Hello = () => {
  <p>Hello</p>
}

export default Hello;
*/