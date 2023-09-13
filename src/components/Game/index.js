import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'

import GameItem from '../GameItem'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testid: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testid: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testid: 'paperButton',
  },
]

class Game extends Component {
  state = {
    score: 0,
    gameResult: '',
    ourGameChoiceUrl: '',
    computerChoiceUrl: '',
  }

  OnClickChoice = id => {
    const computerChoice = Math.floor(Math.random() * 3)
    const computerId = choicesList[computerChoice].id
    const myurl = choicesList.find(each => each.id === id)
    if (myurl) {
      this.setState({
        ourGameChoiceUrl: choicesList.map(each => {
          if (each.id === id) {
            return each.imageUrl
          }
          return null
        }),
      })
    }
    console.log(myurl.imageUrl)
    this.setState({
      computerChoiceUrl: choicesList[computerChoice].imageUrl,
      ourGameChoiceUrl: myurl.imageUrl,
    })
    if (id === choicesList[0].id) {
      if (computerId === choicesList[1].id) {
        this.setState(prev => ({gameResult: 'YOU WON', score: prev.score + 1}))
      } else if (id === computerId) {
        this.setState({gameResult: 'IT IS DRAW'})
      } else {
        this.setState(prev => ({gameResult: 'YOU LOSE', score: prev.score - 1}))
      }
    }
    if (id === choicesList[1].id) {
      if (computerId === choicesList[2].id) {
        this.setState(prev => ({gameResult: 'YOU WON', score: prev.score + 1}))
      } else if (id === computerId) {
        this.setState({gameResult: 'IT IS DRAW'})
      } else {
        this.setState(prev => ({gameResult: 'YOU LOSE', score: prev.score - 1}))
      }
    }
    if (id === choicesList[2].id) {
      if (computerId === choicesList[0].id) {
        this.setState(prev => ({gameResult: 'YOU WON', score: prev.score + 1}))
      } else if (id === computerId) {
        this.setState({gameResult: 'IT IS DRAW'})
      } else {
        this.setState(prev => ({gameResult: 'YOU LOSE', score: prev.score - 1}))
      }
    }
  }

  renderGameItems = () => (
    <ul className="ul-container">
      {choicesList.map(each => (
        <GameItem
          key={each.id}
          details={each}
          OnClickChoice={this.OnClickChoice}
        />
      ))}
    </ul>
  )

  gameReset = () => {
    this.setState({gameResult: ''})
  }

  renderGameResult = () => {
    const {gameResult, computerChoiceUrl, ourGameChoiceUrl} = this.state
    return (
      <>
        <div>
          <h1>YOU</h1>
          <img src={ourGameChoiceUrl} alt="your choice" />
        </div>
        <div>
          <h1>OPPONENT</h1>
          <img src={computerChoiceUrl} alt="opponent choice" />
        </div>
        <p className="result">{gameResult}</p>
        <button
          type="button"
          className="playAgain-btn"
          onClick={this.gameReset}
        >
          PLAY AGAIN
        </button>
      </>
    )
  }

  render() {
    const {score, gameResult} = this.state
    return (
      <div className="game-container">
        <div className="navbar">
          <div className="game-item-container">
            <h1 className="game-item">
              ROCK <br />
              PAPER
              <br /> SCISSORS
            </h1>
          </div>
          <div className="score-container">
            <p className="score-heading">Score</p>
            <p className="score-count">{score}</p>
          </div>
        </div>
        <div className="gamebtn-container">
          {gameResult === '' ? this.renderGameItems() : this.renderGameResult()}
        </div>
        <Popup modal trigger={<button type="button">Rules</button>}>
          {close => (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
              <button type="button" onClick={() => close()}>
                <RiCloseLine />
              </button>
            </>
          )}
        </Popup>
      </div>
    )
  }
}

export default Game
