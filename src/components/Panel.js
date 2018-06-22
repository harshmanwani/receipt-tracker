import React, { Component } from 'react';

class Panel extends Component {
    createReceipt(event){
        event.preventDefault();
        this.props.addReceipt();
    }
    render() {
        return (
            <div className="row flex-edges flex-middle">
                <div className="">
                    <strong>Total:</strong>
                    {this.props.total}
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
