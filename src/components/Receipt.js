import React from 'react'
import Expense from './Expense'
import { getTotalExpenses } from './Helpers'

const Receipt = ({ addExpense, receipt: { expenses }, onChangeExpense }) => (
    <div className="border border-secondary border-4 padding-small">
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
        <div>
            Total: <span>{getTotalExpenses(expenses)}</span>
        </div>
    </div>
)

export default Receipt
