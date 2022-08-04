import PropTypes from 'prop-types';
import { Table, Tbody, TrHead, TrTable } from "./Transactions.styled";


export const Transactions = ({tansactions}) => {
    return (
        <Table>
            <thead>
                <TrHead>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TrHead>
            </thead>
            <Tbody>
                {tansactions.map(({ id, type, amount, currency }) => (
                    <TrTable key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </TrTable>
                ))}
            </Tbody>
        </Table>
    );
}

Transactions.prototype = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
}