import React from 'react';
import Name from '../Name/Name';
import './Cart.css'

const Cart = (props) => {
    const students= props.students;
    const totalStd = students.reduce((previous, current)=> previous+current.quantity,0);
    const totalCost = students.reduce((previous, current)=> previous+current.money,0)
    return (
        <div className='cart'>
            <h2>Actors Added:{totalStd}</h2>
            <h2>Total Cost:{totalCost} TK</h2>
            {
                students.map(student => <Name student={student}></Name>)
            }
        </div>
    );
};

export default Cart;