import React from 'react'

const Panel = ({ addReceipt, total }) => (
    <div className="row flex-right flex-middle">
        <div className="receipt-panel">
            <span><strong>Total :</strong></span>
            <span className="app-total">{total}&nbsp;€</span>
        </div>
        <div className="">
            <button
                value="Add Receipt"
                className="btn-secondary btn-small"
                onClick={addReceipt}
            >
                Add Receipt
      </button>
        </div>
    </div>
)

export default Panel
