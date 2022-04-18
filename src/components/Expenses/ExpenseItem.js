import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';

export const ExpenseItem = ({ expenses }) => {
  const render = expenses.map((item) => (
    <div key={item.id} className="expense-item">
      <ExpenseDate item={item} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">{item.amount}</div>
      </div>
    </div>
  ));

  return <>{render}</>;
};
