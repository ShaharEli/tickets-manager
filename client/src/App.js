import React, { useEffect, useState } from 'react';
import axios from "axios"
import Ticket from "./components/Ticket";
import './App.css';
import Search from "./components/Search"
import Header from "./components/Header"
function App() {
  const [counter,setCounter] = useState(0)
  const [tickets,setTickets] = useState([])
  const [call,setCall] = useState(0)
  const [scrollDisplay,setScrollDisplay] = useState("none")
  const scrollFunction = ()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setScrollDisplay("block");
    } else {
      setScrollDisplay("none");
    }
  }
  window.onscroll = scrollFunction;
  const scrollUp = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
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
    setCall(prev=>prev+1)
    setCounter(0)
  }
  const hiddenItems = ()=>{
    if (counter===0){
      return ""
    }else{
    return <span className="counterHidden">(<span id="hideTicketsCounter" className="hideTicketsCounter">{counter}</span> hidden tickets -<button onClick={restore} id="restoreHideTickets">restore</button>)</span>
    }
  }
 
  return (
    <main id="main">
      <button id="scrollBtn" onClick={scrollUp} style={{display:scrollDisplay}}> go back up</button>
      <Header/>
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
