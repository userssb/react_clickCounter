import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-cont">
        <h1 className="heading">
          The button has been clicked
          <br />
          <span className="val">{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <div className="button-cont">
          <button className="button" onClick={this.onIncrementCount}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
