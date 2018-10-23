import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../../imports/collections/employees'
import EmployeeDetail from '../components/employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component {
    componentWillMount () {
        this.page = 1;
    }
    
    
    handleButtonClick () {
        Meteor.subscribe('employees', PER_PAGE * this.page);
        this.page += 1;
    }

    render () {
    // props.employees => an array of employee object 
    
        return(
            <div>
                <div className = "employee-list">
                    {this.props.employees.map(employee => 
                    <EmployeeDetail key={employee._id} employee = {employee} />
                    )}
                </div>
                <button onClick={this.handleButtonClick.bind(this)} 
                className= "btn btn-primary"> Load More ...</button>
            </div>
            
        ); 
    }
};

// Creae Container for show data with limit 
export default createContainer (() => {
    // Set up subscription
    Meteor.subscribe('employees', PER_PAGE);

    // return an object. Whatever we return will sent to employeelist
    // sa props
    return { employees: Employees.find({}).fetch () }

}, EmployeeList) ;