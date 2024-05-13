import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const spending = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        if (newBudgetValue < spending) {
            alert('Budget cannot be lower than spending.');
        } else {
            setNewBudget(newBudgetValue);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency.split(" ")[0]}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
