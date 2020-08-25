import React, { useState, useEffect } from 'react';
import './Ticket.css';
import ReactCardFlip from 'react-card-flip';

function Ticket(props) {
  const [isFlipped,setIsFlipped] = useState(false);
  const [contentClass, setContentClass] = useState('content');
  const [display, setDisplay] = useState('flex');
  const [buttonDisplay, setButtonDisplay] = useState('none');
  const [classTicket, setClassTicket] = useState('ticket');
  // function to add zeros to the date if needed
  function addZero(i) {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  }
  // function to generate the current date
  function myFunction() {
    const d = props.creationTime;
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
  const see = (e) => {
    if (contentClass === 'content') {
      setContentClass('content2');
      e.target.innerText = 'show less';
    } else {
      setContentClass('content');
      e.target.innerText = 'show more...';
    }
  };
 
  const hide = () => {
    setIsFlipped(false)
    setIsFlipped(true)
    props.addCount();
    setTimeout(()=>{
    setClassTicket('hiddenTicket');
    setDisplay('none');
    },1000)
  };
  const showButton = () => {
    setButtonDisplay('block');
  };
  const hideButton = () => {
    setButtonDisplay('none');
  };
  useEffect(() => {
    setIsFlipped(false)
    setDisplay('flex');
    setClassTicket('ticket');
  }, [props.call]);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <div style={{ display }} className={classTicket} onMouseOver={showButton} onMouseOut={hideButton}>
      <div className="titleAndButton">
        <div>
          <p className="title">{props.title}</p>
        </div>
        <div>
          <button style={{ display: buttonDisplay }} onClick={(e) => hide(e)} className="hideTicketButton">hide</button>
        </div>
      </div>
      <p className={contentClass}>{props.content}</p>
      <span style={{display:props.content.length<280 && window.innerWidth>780?"none":"inline"}} onClick={(e) => see(e)} className="see">show more...</span>
      <div className="contact">
        <div>
          <p className="email">
            By&nbsp;
            <a href={`mailto:${props.userEmail}`}>{props.userEmail}</a>
            &nbsp;
            |
            &nbsp;
            { myFunction() }
          </p>
        </div>
        <div className="labels">
          {
                    props.labels !== null && props.labels.map((label, index) => <div className="label" key={index}>{label}</div>)
                }
        </div>
      </div>
    </div>
    <div className="flip" style={{display}}>
    </div>
    </ReactCardFlip>
  );
}

export default Ticket;
