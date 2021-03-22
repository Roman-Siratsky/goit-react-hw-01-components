import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import user from './components/json_info/user.json'
import friends from './components/json_info/friends.json'
import statisticalData from './components/json_info/statistical-data.json'
import transactions from './components/json_info/transactions.json';

ReactDOM.render(
  <React.StrictMode>
    <App
      user={user}
      friends={friends}
      statisticalData={statisticalData}
      transactions={transactions}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

