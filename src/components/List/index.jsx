import Card from "../Card"

function List({ listTransactions }) {

    return (
        <section className="asideNav">
            <div>
                <h3>Resumo Financeiro</h3>
                <nav>
                    <button>Todos</button>
                    <button>Entradas</button>
                    <button>Despesas</button>
                </nav>
            </div>
            <ul>
                {listTransactions.map(
                    (transaction, index) => <Card transaction={transaction} key={index} />
                )}
            </ul>
        </section>
    )
}

export default List