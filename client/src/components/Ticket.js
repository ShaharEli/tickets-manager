import React from 'react'
import "./Ticket.css"
function Ticket(props) {
    return (
        <div className="ticket">
            <p className="title">{props.title}</p>
            <p className="contnet">{props.content}</p>
            <p className="contnet">By {props.userEmail} | {props.creationTime}</p>
    
        </div>
    )
}

export default Ticket
