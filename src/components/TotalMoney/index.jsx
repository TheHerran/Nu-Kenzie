
function TotalMoney({listTransactions}){

    return(
        <section className="totalMoneyBox">
            <h2>Valor Total: </h2>
            <p>R$ <span>{listTransactions.reduce((prevValue, current) => prevValue + current.value, 0)}</span></p>
            <small>O valor se refere ao saldo</small>
        </section>
    )
}

export default TotalMoney