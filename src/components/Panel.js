import React from 'react'
import PropTypes from 'prop-types';


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

Panel.propTypes = {
    addReceipt: PropTypes.func.isRequired,
    total: PropTypes.number
};

export default Panel
