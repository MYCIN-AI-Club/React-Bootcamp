import React,{useState} from "react";
import "./ExpenseItem.css";
function ExpenseItem(probs){
         

    const month=probs.date.toLocaleString('en-US',{month:'long'});
    const year=probs.date.getFullYear();
    const day=probs.date.toLocaleString('en-US',{day:'2-digit'});
    return (<div className="expense-item">
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
        <div className="expense-item__description">
            <h2>{probs.title}</h2>
            <div className="expense-item__price">{probs.amount}</div>
        </div>
        </div>
        );
}
export default ExpenseItem;
