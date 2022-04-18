import './ExpenseDate.css';

export const ExpenseDate = ({ item }) => {
  const month = (item) => item.date.toLocaleString('en-US', { month: 'long' });
  const day = (item) => item.date.toLocaleString('en-US', { day: '2-digit' });
  const year = (item) => item.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month(item)}</div>
      <div className="expense-date__year">{year(item)}</div>
      <div className="expense-date__day">{day(item)}</div>
    </div>
  );
};
