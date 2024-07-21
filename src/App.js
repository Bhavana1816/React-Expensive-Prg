import './App.css';
import React from 'react';
import {Header } from './componets/Header';
import {Balance} from './componets/Balance';
import {IncomeExpenses} from './componets/IncomeExpenses';
import {TransactionList} from './componets/TransactionList';
import {AddTransaction} from './componets/AddTransaction';

import { GlobalProvider} from  './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
