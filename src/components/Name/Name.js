import React from 'react';
import './Name.css'

const Name = (props) => {
    const {name} = props.student;
    return (
        <div className='selected'>
            <h3> <span>{name}</span> <i class="fas fa-times"></i></h3>
        </div>
    );
};

export default Name;