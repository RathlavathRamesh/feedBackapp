// Write your React code here.
import './index.css'
import {Component} from 'react'
import FeedbacItem from '../feedbacItem'

class Feedback extends Component {
  state = {feedbackgiven: false}

  onChangeState = () => {
    this.setState(prev => ({feedbackgiven: !prev.feedbackgiven}))
  }

  render() {
    const {feedbackgiven} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <>
        {!feedbackgiven && (
          <div className="feedbackContainer">
            <h1 className="heading">
              How Satisfied Are you With Our
              <br /> Customer Support Performance?
              <ul className="items">
                {emojis.map(each => (
                  <FeedbacItem
                    info={each}
                    key={each.id}
                    change={this.onChangeState}
                  />
                ))}
              </ul>
            </h1>
          </div>
        )}
        {feedbackgiven && (
          <div className="feedbackContainer2">
            <img src={loveEmojiUrl} alt="love emoji" className="imglove" />
            <br />
            <h1>Thank You</h1>
            <p className="para">
              We will use your Feedback to Improve our Customer support
              <br />
              performance
            </p>
          </div>
        )}
      </>
    )
  }
}
export default Feedback
