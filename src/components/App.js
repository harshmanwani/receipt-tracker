import React, { Component } from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import Receipt from './Receipt'
import { getTotalExpenses } from './Helpers'

const Container = styled.div`
  background-color: #f1f1f1;
  margin: 0;
  min-height: 100vh;
`

const Paper = styled.div`
  width: 640px !important;
  background-color: white;
  box-shadow: 0px 5px 20px #8c8c8c;
`

const getTotal = receipts =>
    Object.values(receipts).reduce(
        (sum, { expenses }) => sum + getTotalExpenses(expenses),
        0,
    )

class App extends Component {
    state = {
        receipts: { [`receipt-${Date.now()}`]: { expenses: [] } },
    }

    getTotal = () => {
        const { receipts } = this.state
        return getTotal(receipts)
    }

    addReceipt = () => {
        this.setState(prevState => ({
            ...prevState,
            receipts: {
                ...prevState.receipts,
                [`receipt-${Date.now()}`]: { expenses: [] },
            },
        }))
    }

    handleChangeExpense = receiptId => index => (prop, value) => {
        this.setState(({ receipts }) => ({
            receipts: {
                ...receipts,
                [receiptId]: {
                    expenses: receipts[receiptId].expenses.map(
                        (expense, i) =>
                            i === index
                                ? {
                                    ...expense,
                                    [prop]: value,
                                }
                                : expense,
                    ),
                },
            },
        }))
    }

    addExpense = receiptId => () => {
        this.setState(({ receipts }) => ({
            receipts: {
                ...receipts,
                [receiptId]: {
                    expenses: [
                        ...receipts[receiptId].expenses,
                        {
                            desc: '',
                            price: '',
                        },
                    ],
                },
            },
        }))
    }

    render() {
        const { receipts } = this.state
        const total = this.getTotal()
        return (
            <Container className="row flex-center flex-middle">
                <Paper className="border border-primary padding-large margin-large no-responsive">
                    <h3 className="margin-small">Receipt Tracker</h3>
                    <hr />
                    <ul className="list-of-receipts">
                        {Object.entries(receipts).map(([id, receipt]) => (
                            <Receipt
                                onChangeExpense={this.handleChangeExpense(id)}
                                receipt={receipt}
                                key={id}
                                addExpense={this.addExpense(id)}
                            />
                        ))}
                    </ul>
                    <hr />
                    <Panel addReceipt={this.addReceipt} total={total} />
                </Paper>
            </Container>
        )
    }
}

export default App

