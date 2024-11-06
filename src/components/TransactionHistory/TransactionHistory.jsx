import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
        
            <tbody>
                {items.map((item) => {
                    const { id, type, amount, currency } = item;
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>)
                })}
            </tbody>
        </table>
    )
};

export default TransactionHistory;