import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cash-withdraw-app-container">
        <div className="cash-withdraw-container">
          <div className="cash-withdraw-card">S</div>
          <h1 className="cash-withdraw-heading">Sarah Williams</h1>
        </div>
        <div className="cash-withdraw1">
          <p className="cash-withdraw-para">Your Balance</p>
          <div className="cash-withdraw">
            <p className="cash-withdraw-balance">{balance}</p>
            <p className="cash-withdraw-para">In Rupees</p>
          </div>
        </div>
        <p className="cash-withdraw-head">Withdraw</p>
        <p className="cash-withdraw-p">CHOOSE SUM (IN RUPEES)</p>
        <ul className="denomination-items-con">
          {denominationsList.map(eachDenomination => (
            <DenominationItem
              denominationsDetails={eachDenomination}
              key={eachDenomination.id}
              withdrawAmount={this.withdrawAmount}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
