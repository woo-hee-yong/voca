import React from "react";
import {useParams} from "react-router-dom";
import Word, { IWord } from "./Word.tsx";
import useFetch from '../hooks/useFetch.ts';



export default function Day() {
  //dummy.wordsd 
  const { day } = useParams<{day: string}>();
  const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
  //const wordList = dummy.words.filter((word) => word.day=== Number(day));
  if(words.length === 0) {
    return <span>Loading...</span>
  }
  // useEffect(()=> {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setWords(data);
  //   });
  // }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}