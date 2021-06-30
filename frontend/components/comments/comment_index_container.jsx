import { connect } from "react-redux";
import {
  createComment,
  deleteComment,
  allComments,
} from "../../actions/comment_actions";
import CommentIndex from "./comment_index";

const mapStateToProps = (state, ownProps) => {
  const { bill } = ownProps;
  let billComments = [];
  const allComments = Object.values(state.entities.comments);
  allComments.forEach((comment) => {
    if (
      bill.id === comment.bill_id &&
      (bill.lenderId === comment.author_id || bill.owerId === comment.author_id)
    ) {
      billComments.push(comment);
    }
  });

  return {
    currentUser: state.entities.users[state.session.id],
    comments: billComments,
    billId: bill.id,
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    allComments: () => dispatch(allComments()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
