import {Component} from 'react'
import './index.css'

class FeedbacItem extends Component {
  render() {
    const {info, change} = this.props
    const {name, imageUrl} = info
    const onChangeState = () => {
      change()
    }
    return (
      <li className="item">
        <img
          src={imageUrl}
          alt={name}
          className="img"
          onClick={onChangeState}
        />
        <p className="name">{name}</p>
      </li>
    )
  }
}
export default FeedbacItem
