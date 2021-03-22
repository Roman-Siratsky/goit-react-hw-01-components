import React from 'react';
import styles from './Transactions.module.css'

const Transactions = (props) => {
    // debugger
    return (
        <div>
            <table className="transaction-history">
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.transactions.map(trans => {
                            return (
                                <tr key={trans.id}>
                                    <td>{trans.type}</td>
                                    <td>{trans.amount}</td>
                                    <td>{trans.currency}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Transactions;