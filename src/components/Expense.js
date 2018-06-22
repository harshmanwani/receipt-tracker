import React, { Component } from 'react';

class Expense extends Component {
    constructor(props){
        super(props);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleCostChange = this.handleCostChange.bind(this);
    }
    handleDescChange() {
        this.props.expenseDetails.desc = this.desc.value;
    }
    handleCostChange(){
        this.props.expenseDetails.cost = this.cost.valueAsNumber;
        this.props.receiptTotal();
    }
    render() {
        // const details = this.props.expenseDetails;
        // const index = this.props.index;
        return (
            (
                <div className="form-group row flex-edges padding-small" >
                    <input type="text" placeholder="Description" ref={(input) => this.desc = input} onChange={this.handleDescChange}></input>
                    <input type="number" placeholder="Price" ref={(input) => this.cost = input} onChange={this.handleCostChange}></input>
                </div>
            )
        )
    }
}

export default Expense;