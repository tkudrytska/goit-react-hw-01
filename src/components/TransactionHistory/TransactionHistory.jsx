import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.itemsHead}>Type</th>
                    <th className={css.itemsHead}>Amount</th>
                    <th className={css.itemsHead}>Currency</th>
                </tr>
            </thead>
        
            <tbody className={css.tableBody}>
                {items.map((item) => {
                    const { id, type, amount, currency } = item;
                    return (
                        <tr key={id} className={css.lines}>
                            <td className={css.itemsBody}>{type}</td>
                            <td className={css.itemsBody}>{amount}</td>
                            <td className={css.itemsBody}>{currency}</td>
                        </tr>)
                })}
            </tbody>
        </table>
    )
};

export default TransactionHistory;