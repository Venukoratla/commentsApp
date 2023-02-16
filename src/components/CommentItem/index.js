// Write your code here
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, colorsList, likedItem, deleteItem} = props
  const {name, id, isLiked, comment} = details
  const profile = name[0].toUpperCase()
  const time = formatDistanceToNow(new Date())
  const likedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const liked = () => {
    likedItem(id)
  }
  const deleteClicked = () => {
    deleteItem(id)
  }

  return (
    <li>
      <p>{profile}</p>
      <div>
        <h1>
          {name}
          <span>{time} ago</span>
        </h1>
        <p>{comment}</p>
      </div>
      <div>
        <button type="button" onClick={liked}>
          <img src={likedImage} alt="like" />
          Like
        </button>
        <button type="button" onClick={deleteClicked} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
