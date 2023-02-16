import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  enteredName = event => {
    this.setState({name: event.target.value})
  }

  enteredComment = event => {
    this.setState({comment: event.target.value})
  }

  postComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  likedItem = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteItem = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachItem => id !== eachItem.id),
    })
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div>
        <div>
          <h1>Comments</h1>
          <p>Say something about 4.0 Technologies</p>
          <form onSubmit={this.postComment}>
            <input
              placeholder="Your Name"
              onChange={this.enteredName}
              value={name}
            />
            <textarea
              value={comment}
              placeholder="Your Comment"
              onChange={this.enteredComment}
            />
            <button type="submit">Add Comment</button>
          </form>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <p>
          <span>{commentsList.length}</span>Comments
        </p>
        <ul>
          {commentsList.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              details={eachItem}
              colorsList={this.initialContainerBackgroundClassNames}
              deleteItem={this.deleteItem}
              likedItem={this.likedItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
