import React, { useEffect, useState } from 'react';
import axios from "axios"
// import Ticket from "./components/Ticket";
import './App.css';
import Search from "./components/Search"
function App() {
  const [tickets,setTickets] = useState([])
  useEffect(async ()=>{
    const list = await axios.get("/api/tickets")
    setTickets(list.data)
  },[])
  const search = async (title)=>{
    const data = await axios.get(`/api/tickets?searchText=${title}`)
    setTickets(data.data)
  }
  return (
    <main>
      <div>
        <Search search={search}/>
      </div>
      <div>
      {
        tickets.map(i=><li>{i.id}</li>)
      }
      </div>
    </main>
  );
}

export default App;
