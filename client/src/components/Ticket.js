import React, { useState } from 'react'
import "./Ticket.css"
function Ticket(props) {
    const [contentClass,setContentClass] = useState("content")
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
  const see =(e)=>{
      if(contentClass==="content"){
        setContentClass("content2")
        e.target.innerText="show less"
      }else{
        setContentClass("content")
        e.target.innerText="show more..."
        
      }
  }
    return (
        <div className="ticket">
            <p className="title">{props.title}</p>
            <p className={contentClass}>{props.content}</p>
            <span onClick={e=>see(e)} className="see">show more..</span>
            <div className="contact">
            <p className="email">By {props.userEmail} | { myFunction() }</p>
            <div className="lables">
                {
                    props.labels!==null&&props.labels.map((label,index)=><div key={index}>{label}</div>)
                }
            </div>
            </div>
        </div>
    )
}

export default Ticket
