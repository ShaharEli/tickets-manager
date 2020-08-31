import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ticket from './components/Ticket';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [counter, setCounter] = useState(0); // counter of hidden tickets
  const [tickets, setTickets] = useState([]); // list of tickets
  const [scrollDisplay, setScrollDisplay] = useState('none'); // state that will be used to show scroll up button
  const scrollFunction = () => { /* changing the display of the scroll up button if the
    page scrolled down */
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setScrollDisplay('block');
    } else {
      setScrollDisplay('none');
    }
  };
  window.onscroll = scrollFunction;
  const scrollUp = () => { // if the scroll up button pressed the page will scroll up
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => { // initial get request for all the tickets
    const fetch = async () => {
      const list = await axios.get('/api/tickets');
      setTickets(list.data);
    };
    fetch();
  }, []);
  const handleHide =(id)=>{
    setTickets(prev=>{
      const newTickets = prev.map((ticket)=>{
        if(ticket.id ===id){
          ticket.hidden=true
          return ticket
        }
        return ticket
      })
      return newTickets
    })
    setCounter(prev=>prev+1)
  }
  const search = async (title) => { /* search function that will be passed as a prop
     to the input field */
    const data = await axios.get(`/api/tickets?searchText=${title}`);
    setTickets(data.data);
  };

  const restore = async () => { // restore function to display hidden tickets
    setTickets(prev=> prev.map(ticket =>({...ticket,hidden:false})))
    setCounter(0)
  };
  const hiddenItems = () => { /* if there is hidden tickets displayng the count of
    them and button to restore them */
    if (counter === 0) {
      return '';
    }
    return (
      <span className="counterHidden">
        (&nbsp;
        <span id="hideTicketsCounter" className="hideTicketsCounter">{counter}</span>
        &nbsp;
        hidden tickets -
        <button onClick={restore} id="restoreHideTickets">restore</button>
        )
      </span>
    );
  };

  return (
    <main id="main">
      <button id="scrollBtn" onClick={scrollUp} style={{ display: scrollDisplay }}> go back up</button>
      <Header />
      <div>
        <Search search={search} />
      </div>
      <div id="list">
        <h2>
          Showing&nbsp;
          {`${tickets.length} `}

          results
          {hiddenItems()}
        </h2>
        {
          tickets.map((ticket) => (
            ticket.hidden!==true&&
            <Ticket
<<<<<<< HEAD
              ticket={ticket}
              key={ticket.id}
              handleHide={handleHide}
              creationTime={generateTime(new Date(ticket.creationTime))}
=======
              addCount={addCount}
              call={call}
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              content={ticket.content}
              userEmail={ticket.userEmail}
              creationTime={new Date(ticket.creationTime)}
>>>>>>> parent of 76de38f... fixed issues
              labels={ticket.labels ? ticket.labels : null}
            />
          ))
        }
      </div>
    </main>
  );
}

export default App;
