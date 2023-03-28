import React from 'react'
import { Transactions } from './Transactions'

export const TransactionList = (props) => {
  return (
    <><h3>History</h3>
    <ul className="list">
      {props.allTransactions.map((transaction,index)=>{
        return <Transactions onDelete = {props.onDelete} key = {index} id = {index} transaction = {transaction}></Transactions>
      })}
    </ul>
</>
  )
}
