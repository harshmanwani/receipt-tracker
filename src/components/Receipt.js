import React, { Component } from 'react';
import Expense from './Expense';

class Receipt extends Component {
    constructor(props){
        super(props);
        this.newExpense = this.newExpense.bind(this);
        this.receiptTotal = this.receiptTotal.bind(this);
        this.state = {
            expenses: [],
            total: ''
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
    receiptTotal(){
        let sum = 0;
        for (let i = 0; i < this.state.expenses.length; i++) {
            sum += this.state.expenses[i].cost;
        }
        this.setState(prevState => ({
            total: sum.toFixed(2)
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
                        this.state.expenses.map((expense, key) => {
                            return (
                                <Expense 
                                    key={key}
                                    index={key} 
                                    expenseDetails={expense}
                                    receiptTotal={this.receiptTotal}
                                />
                            )}
                        )
                    }
                </ul>
                <div>
                    Total: <span>{this.state.total}</span>
                </div>
            </div>
        )
    }
}

export default Receipt;