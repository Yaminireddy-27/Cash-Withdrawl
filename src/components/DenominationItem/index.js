// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onWithDrawl = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onWithDrawl}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
