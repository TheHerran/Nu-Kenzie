import { FaTrash } from 'react-icons/fa';

function Card({ transaction, index }) {

    return (
        <li key={index} style={transaction.type === 'Entrada' ? { backgroundColor: '#03B898' } : { backgroundColor: '#E9ECEF' }}>
            <div className='cardMark'></div>

            <div className='cardContent'>
                <h3> {transaction.description} </h3>
                <span>R$ {transaction.value}</span>
                <small> {transaction.type} </small>
                <div className='delButton'><FaTrash className='delIcon'/></div>
            </div>
        </li>
    )
}

export default Card