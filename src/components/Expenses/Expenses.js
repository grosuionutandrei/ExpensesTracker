import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';
import './Expenses.css';
import { Card } from '../UI/Card';
import React, { useState } from 'react';
export const Expenses = ({ expenses }) => {
  const [title, setTitle] = useState('initial');

  const checkClicked = (e) => {
    for (let elem of expenses) {
      if (elem.id === e.target.value) {
        setTitle(e.target.value);
        elem.title = `My problem solved ${e.target.value}`;
      }
    }
  };

  const render = expenses.map((item) => (
    <Card key={item.id} className="expense-item">
      <ExpenseDate item={item} />
      <div className="expense-item__description">
        <h2 id={item.id}>{item.title}</h2>
        <div className="expense-item__price">{item.amount}</div>
      </div>
      <button value={item.id} onClick={checkClicked}>
        Change Title
      </button>
    </Card>
  ));
  return <Card className="expenses">{render}</Card>;
};
