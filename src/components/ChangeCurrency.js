import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {

    const { currency } = useContext(AppContext);

    const { dispatch } = useContext(AppContext);

    const setName = (name) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: name
        });
    }

    return (
        <select className="custom-select alert alert-success" style={{
            width: '100%'
        }} id="chnageCurrency" onChange={(event) => setName(event.target.value)} >
            <option defaultValue>Currency ({currency})</option>
            <option value="$ Dollar" name="dollar">$ Dollar</option>
            <option value="£ Pound" name="pound">£ Pound</option>
            <option value="€ Euro" name="euro">€ Euro</option>
            <option value="₹ Ruppee" name="ruppee">₹ Ruppee</option>
        </select>
    )
}

export default ChangeCurrency