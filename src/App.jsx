import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
const body = {"query": "{boards(ids:  { name id description items { name column_values{title id type text } } } }"};
const config = {body,headers: {Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI1MzQ3MTEyNSwidWlkIjo0MjYzMTIxMCwiaWFkIjoiMjAyMy0wNC0yOFQxMzozMToxOC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTY2OTIyNzMsInJnbiI6InVzZTEifQ.7tPvOl38AxPEv7RRupTylfK6DuhdchhasZdgjXTgYHI"}};

function App() {
  const [data, setData] = useState('cargando')

  //{"query": "{boards(ids:  { name id description items { name column_values{title id type text } } } }"
  useEffect(()=>{
    if(data === 'cargando') {
      axios.get('https://api.monday.com/v2',{Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI1MzQ3MTEyNSwidWlkIjo0MjYzMTIxMCwiaWFkIjoiMjAyMy0wNC0yOFQxMzozMToxOC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTY2OTIyNzMsInJnbiI6InVzZTEifQ.7tPvOl38AxPEv7RRupTylfK6DuhdchhasZdgjXTgYHI"})
        .then(x=>{
          console.log(x);
          setData(x);
        })
    }
  },[])

  return (
    <>
      <h1>Prueba Monday - Calendario dinamico</h1>
      <p>Probando la api de <a href="https://monday.com/lang/es" target='_blank'>monday</a></p>
      {data}
    </>
  )
}

export default App
