import React, { Component } from 'react';
import Expense from './Expense';

class Receipt extends Component {
    constructor(props){
        super(props);
        this.newExpense = this.newExpense.bind(this);
        this.state = {
            expenses: []
        }
    }
    newExpense(event){
        event.preventDefault();
        const expense = {
            desc: "",
            cost: ""
        }
        this.setState(prevState => ({
            expenses: [...prevState.expenses, expense]
        }))
    }
    
    render() {
        return (
            <div className="border border-secondary border-4 padding-small">
                <div className="row flex-edges">
                    <select name="category">
                        <option value="food">Food</option>
                        <option value="houseware">Houseware</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                    <button className="btn-small" onClick={(e) => this.newExpense(e)}>Add Expense</button>
                </div>
                <ul className="list-of-expense">
                    {
                        this.state.expenses.map((expense, index) => {
                            return (
                                <Expense 
                                    key={index} 
                                    expenseDetails={this.state.expenses}
                                />
                            )}
                        )
                    }
                </ul>
                <div>
                    Total: <span>{4+5}</span>
                </div>
            </div>
        )
    }
}

export default Receipt;