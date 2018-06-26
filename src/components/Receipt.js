import React from 'react'
import Expense from './Expense'
import { getTotalExpenses } from './Helpers'

const Receipt = ({ addExpense, receipt: { expenses }, onChangeExpense }) => (
    <div className="receipt border border-secondary border-primary padding-small">
        <div className="row flex-edges">
            <select name="category">
                <option value="food">Food</option>
                <option value="houseware">Houseware</option>
                <option value="entertainment">Entertainment</option>
            </select>
            <button className="btn-small" onClick={addExpense}>
                Add Expense
            </button>
        </div>
        <ul className="list-of-expense">
            {expenses.map((expense, index) => (
                <Expense onChangeExpense={onChangeExpense(index)} key={index} />
            ))}
        </ul>
        <div className="receipt-panel">
            <span className="">Total : </span>
            <span className="receipt-total">{getTotalExpenses(expenses)}&nbsp;€</span>
        </div>
    </div>
)

export default Receipt
