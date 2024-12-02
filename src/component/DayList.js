import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setDays(data);
  //   })
  // }, []);
  //[count]를 넣는 것은 count가 변경되었을때만 작동하기 위함이다.
  // []은 최초에 한번만 돌게하는 것으로 설정하는 것이다.

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
     
    </>
  );
}