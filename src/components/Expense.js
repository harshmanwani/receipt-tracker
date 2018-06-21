import React, { Component } from 'react';

class Expense extends Component {
    // constructor(props){
    //     super(props);
    //     this.expenseInfo = this.expenseInfo.bind(this);
    // }
    // expenseInfo(e, key){
    //     const expense = this.props.expenseDetails[key];
    //     const updatedExpense = {
    //         ...expense,
    //         [e.target.name]: e.target.value
    //     }
    //     this.props.updateExpense(key, updatedExpense);
    // }
    render() {
        // const details = this.props.expenseDetails[key];
        return (
            (
                <div className="form-group row flex-edges padding-small" >
                    <input type="text" placeholder="Description" id="desc" ></input>
                    <input type="number" placeholder="Price" id="price" ></input>
                </div>
            )
        )
    }
}

export default Expense;