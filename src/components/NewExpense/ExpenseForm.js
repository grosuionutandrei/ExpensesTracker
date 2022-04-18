import React, { useState, useRef } from 'react';
import './ExpenseForm.css';
export const ExpenseForm = ({ getData }) => {
  let incrementer = useRef(5);
  const [formValues, setFormValues] = useState({
    id: '',
    title: '',
    amount: '',
    date: '',
  });
  const titleChangeHandler = (event) => {
    // setFormValues({
    //   ...formValues,

    // });

    //  Cand state-ul actual depinde de state-ul precedent se foloseste
    // aproach-ul cu set state prin intermediul unui arrow function
    // Din cauza ca React programeaza state-urile , aceasta utilizare garanteaza
    // intotdeauna state-ul cel mai recent.
    setFormValues((prevState) => {
      return {
        ...formValues,
        [event.target.name]: event.target.value,
        id: `e${incrementer.current}`,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setFormValues((prevState) => {
      return {
        ...formValues,
        [event.target.name]: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setFormValues((prevState) => {
      return {
        ...formValues,
        [event.target.name]: event.target.value,
      };
    });
  };

  // Two way binding , cu ajutorul atributului value putem modifica valoarea
  // inputului atat cand user-ul introduce date, dar si adupa ce user-ul a dat
  // submit.
  // Permite sa culegem user_input dar si sa il schimbam dupa ce form a fost submited

  const submitFormHandler = (event) => {
    event.preventDefault();
    let identifier = incrementer.current;
    const expenseNew = { ...formValues };
    expenseNew.date = new Date(formValues.date);
    getData(expenseNew);

    setFormValues({ ...formValues, title: '', amount: '', date: '' });
    incrementer.current = identifier + 1;
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formValues.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            id="amount"
            value={formValues.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Amount</label>
          <input
            value={formValues.date}
            name="date"
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
