import React from 'react'

export const Transactions = (props) => {
    function getClass(){
        if(props.transaction.amount < 0) return "minus"
        else return "plus";
    }
    function handleClick(){
        props.onDelete(props.id,props.transaction.amount);
    }
  return (
    <div>
        <li className={getClass()}>
        {props.transaction.text} <span>{props.transaction.amount}</span><button className="delete-btn" onClick = {handleClick}>x</button>
        </li> 
    </div>
  )
}
