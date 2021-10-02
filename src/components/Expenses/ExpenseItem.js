import React from 'react';

import Date from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {
   
    return (
        <li>
            <Card className="expense-item">
                <Date date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">RS. {props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;