import React, { useEffect, useState } from 'react';
import axios from "axios"
import Ticket from "./components/Ticket";
import './App.css';
import Search from "./components/Search"
function App() {
  const [counter,setCounter] = useState(0)
  const [tickets,setTickets] = useState([])
  const [call,setCall] = useState(0)

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
  const addCount = ()=>{
    setCounter(prev=>prev+1)
  }
  const restore = async ()=>{
    // const list = await axios.get("/api/tickets")
    // setTickets(list.data)
    setCall(prev=>prev+1)
    setCounter(0)
  }
  const hiddenItems = ()=>{
    if (counter===0){
      return ""
    }else{
    return <span className="counterHidden">({counter} hidden tickets -<button onClick={restore} className="restoreHideTickets">restore</button>)</span>
    }
  }
  return (
    <main id="main">
      <h1>Cards manager</h1>
      <div>
        <Search search={search}/>
      </div>
      <div id="list">
        <h2>Showing {tickets.length} results {hiddenItems()}</h2>
      {
        tickets.map((ticket,index)=>{
        return <Ticket
        addCount={addCount}
        call={call}
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
