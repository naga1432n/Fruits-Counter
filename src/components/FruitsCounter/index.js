import React, {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="fruits-counter-container">
        <h1 className="heading">
          Bob ate <span className="count">{mangoCount}</span> mangoes{' '}
          <span className="count">{bananaCount}</span> bananas
        </h1>
        <div className="fruit-container">
          <div className="fruit-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-image"
            />
            <button className="fruit-button" onClick={this.onEatMango}>
              Eat Mango
            </button>
          </div>
          <div className="fruit-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-image"
            />
            <button className="fruit-button" onClick={this.onEatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
