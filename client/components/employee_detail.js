import React from 'react';

const EmployeeDetail = ({employee}) => {
    //props.employee is our employee model

    const { name, email, phone, avatar} = employee;
    return (
        <div className = "thumbnail">
           <img src={avatar} />
           <div className="caption">
                <h3>{name}</h3>
                <ul className= "list-group-item"> Email: {email}</ul>
                <ul className= "list-group-item"> Phone: {phone} </ul>
           </div>
        </div>
    )

};



export default EmployeeDetail;

