import './App.css';
import './components/style.css'
import { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import TotalMoney from './components/TotalMoney';

function App() {

    const [listTransactions, setListTransactions] = useState([])


    return (
        <div className="App">
            <header className='App-header'>
                <h1><span>Nu</span>Kenzie</h1>
            </header>
            <main className="App-main">
                <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
                <TotalMoney listTransactions={listTransactions} />
            </main>
            <aside className='App-aside'> 
                <List listTransactions={listTransactions} />
            </aside>
        </div>
    );
}

export default App;
