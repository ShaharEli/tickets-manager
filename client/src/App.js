import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ticket from './components/Ticket';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [counter, setCounter] = useState(0); // counter of hidden tickets
  const [tickets, setTickets] = useState([]); // list of tickets
  const [call, setCall] = useState(0); // state that will be passed as a prop to restore tickets
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
  const search = async (title) => { /* search function that will be passed as a prop
     to the input field */
    const data = await axios.get(`/api/tickets?searchText=${title}`);
    setTickets(data.data);
  };
  const addCount = () => { /* count function that will be used in the ticket componenet
     to update the count of hidden tickets */
    setCounter((prev) => prev + 1);
  };
  const restore = async () => { // restore function to display hidden tickets
    setCall((prev) => prev + 1);
    setCounter(0);
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
  function addZero(i) {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  }
  // function to generate the current date
  function generateTime(time) {
    const d = time;
    const m = addZero(d.getMinutes());
    const h = addZero(d.getHours());
    const s = addZero(d.getSeconds());
    let today = d;
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${mm}/${dd}/${yyyy}`;
    return `${today}  ${h}:${m}:${s}`;
  }
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
            <Ticket
              addCount={addCount}
              ticket={ticket}
              call={call}
              key={ticket.id}
              creationTime={generateTime(new Date(ticket.creationTime))}
              labels={ticket.labels ? ticket.labels : null}
            />
          ))
        }
      </div>
    </main>
  );
}



export default App;
