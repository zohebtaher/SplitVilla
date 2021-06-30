import * as APIUtil from "../utils/comment_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments,
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment,
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors,
});

export const clearCommentErrors = () => ({
  type: CLEAR_COMMENT_ERRORS,
});

export const allComments = () => (dispatch) =>
  APIUtil.allComments().then(
    (comments) => dispatch(receiveComments(comments)),
    (errors) => dispatch(receiveCommentErrors(errors))
  );

export const findComment = (commentId) => (dispatch) =>
  APIUtil.findComment(commentId).then(
    (comment) => dispatch(receiveComment(comment)),
    (errors) => dispatch(receiveCommentErrors(errors))
  );

export const createComment = (comment) => (dispatch) =>
  APIUtil.createComment(comment).then(
    (newComment) => dispatch(receiveComment(newComment)),
    (errors) => dispatch(receiveCommentErrors(errors))
  );

export const deleteComment = (commentId) => (dispatch) =>
  APIUtil.deleteComment(commentId).then(
    (comment) => dispatch(removeComment(comment)),
    (errors) => dispatch(receiveCommentErrors(errors))
  );
