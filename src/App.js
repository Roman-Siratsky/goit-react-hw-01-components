import React from 'react'
import Profile from './components/ProfileComponent'
import Friends from './components/FriendsComponent';
import Statistic from './components/StatComponent';
import Transactions from './components/TransactionComponent';


function App(props) {
  // debugger
  return (
    <div>
      <Profile {...props.user} {...props.user.stats}/>
      <Friends friends={[...props.friends]}/>
      <Statistic statistic={[...props.statisticalData]}/>
      <Transactions transactions={[...props.transactions]}/>
    </div>
  )
}

export default App;
