import React from 'react';

const Summary = (props) => {
    const summary = props.summary

    let total = 0;
    for(let i = 0; i < summary.length; i++){
    const employee = summary [i];
    total = total + employee.salary
    }

    const employeeSalary = (total).toFixed(2);
    const Wages = (employeeSalary/15).toFixed(2);
    const grandTotal = (Number(employeeSalary) + Number(Wages)).toFixed(2);

    return (
        <div>
            <h4>Get ready for a SHOCK! </h4>
            <br/>
            <p> <span>No of Heroes :</span> {summary.length}</p>
            <p> <span>salaries : $</span> {employeeSalary} </p>
            <p> <span>wages : $</span> {Wages} </p>
            <h6> TOTAL : $ {grandTotal} </h6>
        </div>
    );
};

export default Summary;