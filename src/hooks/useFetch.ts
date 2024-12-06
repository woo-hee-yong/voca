import {useEffect, useState} from 'react';

export default function useFetch(url: string) {
  const [data, setData] = useState([]);
  //const wordList = dummy.words.filter((word) => word.day=== Number(day));

  useEffect(()=> {
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setData(data);
    });
  }, [url]);

  return data;
};

