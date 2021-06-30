import React from "react";
import { connect } from "react-redux";
import { deleteComment, allComments } from "../../actions/comment_actions";
import { fetchAllUsers } from "../../actions/user_actions";

class CommentItem extends React.Component {
  render() {
    const { currentUserId, author, comment } = this.props;

    const deleteButton =
      comment.author.id === currentUserId ? (
        <button
          className="x-bill"
          onClick={() =>
            this.props.deleteComment(comment.id).then(this.props.allComments)
          }
        >
          x
        </button>
      ) : null;

    return (
      <div className="comment">
        <h1>{author}: </h1>
        <p>{comment.content}</p>
        {deleteButton}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.id,
  author: ownProps.comment.author.username,
  comment: ownProps.comment,
});

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  allComments: () => dispatch(allComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
