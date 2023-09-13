import './index.css'

const GameItem = props => {
  const {details, OnClickChoice} = props
  const {id, imageUrl, testid} = details
  const ClickedChoice = () => {
    OnClickChoice(id)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        className="game-btn"
        onClick={ClickedChoice}
        data-testid={testid}
      >
        <img src={imageUrl} alt={id} className="game-image" />
      </button>
    </li>
  )
}

export default GameItem
