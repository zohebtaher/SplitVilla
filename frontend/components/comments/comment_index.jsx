import React from "react";
import CommentItem from "./comment_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({
      content: this.state.content,
      author_id: this.props.currentUserId,
      bill_id: this.props.billId,
    });

    this.setState({ content: "" });
  }

  handleChange(e) {
    this.setState({ content: e.currentTarget.value });
  }
  render() {
    const { comments } = this.props;
    let commentdisplay;

    if (comments.length === 0) {
      commentdisplay = null;
    } else {
      commentdisplay = (
        <ul className="comment-display">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      );
    }
    return (
      <div className="comment-container">
        {commentdisplay}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            value={this.state.content}
            placeholder="Add a comment"
          ></textarea>
          <button className="orange-button" type="submit">
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default CommentIndex;
