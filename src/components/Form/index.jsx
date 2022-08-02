import { useState } from "react"

function Form({ listTransactions, setListTransactions }) {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('Entrada')

    const handleSubmit = (event) => {
        event.preventDefault()
        setListTransactions([...listTransactions, { description, type, value }])
        setDescription('')
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="descricao">Descrição </label>
            <input type="text" name='descricao' placeholder="Digite aqui uma descrição" value={description}
                onChange={(event) => setDescription(event.target.value)} />
            <small>Ex: Compra de roupas</small>


            <label htmlFor="value">Valor </label>
            <label htmlFor="transactions">Tipo de Valor </label>

            <input type="number" name="value" placeholder="1" value={value}
                onChange={(event) => setValue(Number(event.target.value))} />

            <select name="transactions" id="transactions"
                onChange={(event) => {
                    setType(event.target.value)
                    if(event.target.value === 'Despesa') {
                        setValue(value * -1)
                    }
                }} >

                <option value="Entrada" >Entrada</option>
                <option value="Despesa" >Despesa</option>
            </select>

            <button type="submit">Inserir Valor</button>
        </form>
    )
}

export default Form