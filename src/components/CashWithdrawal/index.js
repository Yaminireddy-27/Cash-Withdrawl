// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawl extends Component {
  state = {amount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="withdrawl-card">
          <div className="profile-holder">
            <p className="profile">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-holder">
            <p className="balance">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="amount">Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominationDetails={each}
                key={each.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
