import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency.split(" ")[0] + props.cost}</td>
            <td><button onClick={event => increaseAllocation(props.name)} className='btn text-success rounded-circle p-0'>
                <IoMdAddCircle size='1.5em' />
            </button></td>
            <td><button onClick={event => decreaseAllocation(props.name)} className='btn text-danger rounded-circle p-0'>
                <AiFillMinusCircle size='1.5em' />
            </button></td>
            <td><button className='btn'>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </button></td>
        </tr>
    );
};

export default ExpenseItem;