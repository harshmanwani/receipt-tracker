import React from 'react'

const Expense = ({ onChangeExpense }) => (
    <div className="expense row padding-small">
        <input
            type="text"
            placeholder="Description"
            className="desc"
            onChange={e => onChangeExpense('desc', e.target.value)}
        />
        <input
            type="number"
            placeholder="Price"
            className="price"
            onChange={e => onChangeExpense('price', +e.target.value)}
            />
        <span className="euro">
            €
        </span>
    </div>
)

export default Expense
