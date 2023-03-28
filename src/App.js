import './App.css';
import { useState } from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
function App() {
  const [transactions,setTransactions] = useState([])
  const [income,setIncome] = useState(0);
  const [expense,setExpense] = useState(0);

  function newTransaction(text,amount){
    if(amount === 0){
      alert("Amount cannot be 0");
      return;
    }
    setTransactions((prev) => {
      return [...prev,{text : text, amount : amount}]
    })
    if(amount > 0) setIncome(prev => Number(prev)+Number(amount));
    else setExpense(prev => Number(prev)-Number(amount));
  }
  
  function deleteTransaction(index,ic){
    if(Number(ic) > 0) setIncome((prev) => {return(Number(prev)-Number(ic))})
      else setExpense((prev) => {return (Number(prev)+Number(ic))})
    setTransactions(prev => {
      return prev.filter((item,id) => {
        return id !== index;
      })
    })
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <Balance balance = {income-expense}></Balance>
        <IncomeExpenses income = {income} expense = {expense}></IncomeExpenses>
        <TransactionList allTransactions = {transactions} onDelete = {deleteTransaction}></TransactionList>
        <AddTransaction onAdd = {newTransaction}></AddTransaction>
      </div>
    </div>
  );
}

export default App;
