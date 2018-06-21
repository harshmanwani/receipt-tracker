import React, { Component } from 'react';

class Expense extends Component {
    
    render() {
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