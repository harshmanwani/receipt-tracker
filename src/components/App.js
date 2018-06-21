import React, { Component } from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import Receipt from './Receipt';
// import ReceiptList from './ReceiptList';


const Container = styled.div`
  background-color: #f1f1f1;
  margin: 0;
  min-height: 100vh;
`;

const Paper = styled.div`
  width: 640px !important;
  background-color: white;
`;

// Main app structure
class App extends Component {
    constructor(){
        super();
        this.addReceipt = this.addReceipt.bind(this);
        this.state = {
            receipts: {},
            total: ''
        }
    }

    addReceipt(){
        const receipts = {...this.state.receipts};
        const timeStamp = Date.now();
        receipts[`receipt-${timeStamp}`] = {};
        this.setState({ receipts });
    }

    // addExpense(key, expense) {
    //     const receipts = {...this.state.receipts};
    //     if(!(receipts.hasOwnProperty('expenses'))){
    //         receipts[key].expenses = [];
    //     }
    //     receipts[key].expenses.push(expense);
    //     this.setState({ receipts });
    // }

    render() {
        return (
            <Container className="row flex-center flex-middle">
                <Paper className="border border-primary padding-large margin-large no-responsive">
                    <h3 className="margin-small">Receipt Tracker</h3>
                    <hr/>
                    <ul className="list-of-receipts">
                        {
                            Object
                                .keys(this.state.receipts)
                                .map(key => <Receipt key={key}/>)
                        }
                    </ul>
                    <hr/>
                    <Panel addReceipt={this.addReceipt}/>
                </Paper>
            </Container>
        );
    }
}

export default App;

// add receipt button X
// add expense btn X
// expense form
// receipt total
// panel total
// proptype valid
// deploy