import React, { useEffect, useState } from 'react';
import axios from "axios"
import Ticket from "./components/Ticket";
import './App.css';
import Search from "./components/Search"
function App() {
  const [tickets,setTickets] = useState([])
  useEffect( ()=>{ const fetch = async ()=>{
    const list = await axios.get("/api/tickets")
    setTickets(list.data)
  }
    fetch()
  },[])
  const search = async (title)=>{
    const data = await axios.get(`/api/tickets?searchText=${title}`)
    setTickets(data.data)
  }
  return (
    <main id="main">
      <h1>Cards manager</h1>
      <div>
        <Search search={search}/>
      </div>
      <div id="list">
      <h2>Showing {tickets.length} results</h2>
      {
        tickets.map((ticket,index)=>{
        return <Ticket
        key={index}
        id={ticket.id} 
        title={ticket.title}
        content={ticket.content}
        userEmail={ticket.userEmail}
        creationTime={new Date(ticket.creationTime)}
        labels={ticket.labels?ticket.labels:null}  />
      })
      }
      </div>
    </main>
  );
}

export default App;
