import React, { useState, useEffect } from 'react';
import './Ticket.css';
import ReactCardFlip from 'react-card-flip'; // comopnent that will flip the ticket

function Ticket({ticket,call,labels,creationTime,handleHide}) {
  const [isFlipped, setIsFlipped] = useState(true); // state for flipping animation
  const [contentClass, setContentClass] = useState('content'); // state for changing the content class name
  const [display, setDisplay] = useState('flex'); // state for hidding and displaying the ticket
  const [buttonDisplay, setButtonDisplay] = useState('none'); // state for hidding and displaying the hide button
  const [classTicket, setClassTicket] = useState('ticket'); // state for changing the ticket class name
  // function to add zeros to the date if needed

  const changeButtonInnerText = (e) => { // function that will change the hide button inner text
    if (contentClass === 'content') {
      setContentClass('content2'); // this class not limited in lines
      e.target.innerText = 'show less';
    } else {
      setContentClass('content'); // this class is limited for 4 lines
      e.target.innerText = 'show more...';
    }
  };
  useEffect(() => { // flip animation in the first mount
    setTimeout(() => {
      setIsFlipped(false);
    }, 400);
  },
  []);
  const showButton = () => {
    setButtonDisplay('block');
  };
  const hideButton = () => {
    setButtonDisplay('none');
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div
        style={{ display }}
        className={classTicket}
        onMouseOver={showButton}
        onMouseOut={hideButton}
      >
        <div className="titleAndButton">
          <div>
            <p className="title">{ticket.title}</p>
          </div>
          <div>
            <button style={{ display: buttonDisplay }} onClick={() => handleHide(ticket.id)} className="hideTicketButton">hide</button>
          </div>
        </div>
        <p className={contentClass}>{ticket.content}</p>
        {ticket.title === "Corvid App Developers Alpha?" && console.log(ticket.content.length+" "+window.innerWidth)}
        <span style={{ display: ticket.content.replace(/(\r\n|\n|\r)/gm, "").length < 308 && window.innerWidth > 780 ? 'none' : 'inline' }} onClick={(e) => changeButtonInnerText(e)} className="see">show more...</span>
        <div className="contact">
          <div>
            <p className="email">
              By&nbsp;
              <a href={`mailto:${ticket.userEmail}`}>{ticket.userEmail}</a>
              &nbsp;
              |
              &nbsp;
              { creationTime }
            </p>
          </div>
          <div className="labels">
            {
              labels !== null && labels.map((label) => <div className="label" key={label}>{label}</div>)
            }
          </div>
        </div>
      </div>
      <div className="flip" style={{ display }} />
    </ReactCardFlip>
  );
}

export default Ticket;
