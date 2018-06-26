import React from 'react'

const Panel = ({ addReceipt, total }) => (
    <div className="row flex-edges flex-middle">
        <div className="">
            <strong>Total:</strong>
            {total}
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
