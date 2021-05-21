import { connect } from "react-redux";
import BillForm from "./bill_form";
import { createBill, clearBillErrors, getAllBills } from "../../actions/bill_action";
import { closeModal } from "../../actions/modal_actions";
import React from "react";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    friendships: Object.values(state.entities.friendships),
    currentUserId: state.session.id,
    errors: state.errors.bills,
    formType: " Add an Expense",
    bill: {
      settle_up: false,
      amount: "",
      category: "general",
      description: "",
      author_id: state.session.id,
      lender_id: "",
      ower_id: "",
      split_equally: true,
      lender_paid: "",
      lender_owed: "",
      ower_paid: "0.00",
      ower_owed: "0.00",
      num: "0.00",
      friend: { userName: "", friendId: "" },
    },
  };
};

const mDTP = (dispatch) => ({
  processBill: (bill) => dispatch(createBill(bill)),
  clearErrors: () => dispatch(clearBillErrors()),
  closeModal: () => dispatch(closeModal()),
  getAllBills: () => dispatch(getAllBills())
});

export default connect(mSTP, mDTP)(BillForm);
