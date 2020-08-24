import React, { useState, useEffect } from 'react'
import "./Ticket.css"
function Ticket(props) {
    const [contentClass,setContentClass] = useState("content")
    const [display,setDisplay] = useState("flex")
    const [buttonDisplay,setButtonDisplay] = useState("none")
    const [classTicket, setClassTicket]=useState("ticket")
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
  const hide = ()=>{
    setClassTicket("hiddenTicket")
    props.addCount()
    setDisplay("none")
  }
  const showButton = ()=>{
    setButtonDisplay("block")
  }
  const hideButton = ()=>{
    setButtonDisplay("none")
  }
  useEffect(()=>{
  setDisplay("flex")
  setClassTicket("ticket")
  },[props.call])
    return (
        <div style={{display}} className={classTicket} onMouseOver={showButton} onMouseOut={hideButton}>
            <div className="titleAndButton">
            <div>
            <p className="title">{props.title}</p>
            </div>
            <div>
            <button style={{display:buttonDisplay}} onClick={e=>hide(e)} className="hideTicketButton">hide</button>
            </div>
            </div>
            <p className={contentClass}>{props.content}</p>
            <span onClick={e=>see(e)} className="see">show more...</span>
            <div className="contact">
            <div>
            <p className="email">By {props.userEmail} | { myFunction() }</p>
            </div>
            <div className="labels">
                {
                    props.labels!==null&&props.labels.map((label,index)=><div className="label" key={index}>{label}</div>)
                }
            </div>
            </div>
        </div>
    )
}

export default Ticket
