// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNo: 0}

  onIncrement = () => {
    const updateNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({randomNo: prevState.randomNo + updateNumber}))
  }

  render() {
    const {randomNo} = this.state
    const evenOdd = randomNo % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Count {randomNo}</h1>
          <p className="sub-heading"> Count is {evenOdd}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
