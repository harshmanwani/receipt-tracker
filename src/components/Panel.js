import React, { Component } from 'react';

class Panel extends Component {
    createReceipt(event){
        event.preventDefault();
        this.props.addReceipt();
    }
    render() {
        // const { addReceipt } = this.props.addReceipt;
        return (
            <div className="row flex-edges flex-middle">
                <div className="">
                    <strong>Total:</strong>
                    {5+6}
                </div>
                <div className="">
                    <button value="Add Receipt" className="btn-secondary btn-small" 
                        onClick={(e) => this.createReceipt(e)}
                    >Add Receipt</button>
                </div>
            </div>
        )
    }
}

export default Panel;
