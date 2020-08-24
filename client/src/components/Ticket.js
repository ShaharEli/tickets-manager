import React from 'react'
import "./Ticket.css"
function Ticket(props) {
    //function to add zeros to the date if needed
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }
  //function to generate the current date
  function myFunction() {
    let d = props.creationTime
    let m = addZero(d.getMinutes());
    let h = addZero(d.getHours());
    let s = addZero(d.getSeconds());
    let today = d
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today+"  "+h + ":" + m + ":"+s ;
  }
    return (
        <div className="ticket">
            <p className="title">{props.title}</p>
            <p className="content">{props.content}</p>
            <div>
            <p className="conatact">By {props.userEmail} | { myFunction() }</p>
            </div>
        </div>
    )
}

export default Ticket
