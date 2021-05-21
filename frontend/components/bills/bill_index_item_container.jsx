import { connect } from "react-redux";

import { deleteBill } from "../../actions/bill_action";
import BillIndexItem from "./bill_index_item";
import { openModal } from "../../actions/modal_actions"

const mapStateToProps = (state, ownProps) => {
  const { bill } = ownProps;
  return {
    currentUser: state.entities.users[state.session.id],
    lender:state.entities.users[bill.lenderId],
    friendships: Object.values(state.entities.friendships),
    bill: bill,
    currentUserId: state.session.id,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    deleteBill: (billId) => dispatch(deleteBill(billId)),
    openModal: (modal, objectId) => dispatch(openModal(modal, objectId)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillIndexItem);
