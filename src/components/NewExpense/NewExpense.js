import React from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense = ({ expenses, onSetExpenses }) => {
  const getDataFromForm = (formData) => {
    const capturedData = {
      ...formData,
    };
    onSetExpenses(capturedData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm getData={getDataFromForm} />
    </div>
  );
};
