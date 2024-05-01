// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, withdrawAmount} = props
  const {value} = denominationsDetails

  const withdrawBalance = () => {
    withdrawAmount(value)
  }

  return (
    <li>
      <button
        type="button"
        onClick={withdrawBalance}
        className="denomination-btn"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
