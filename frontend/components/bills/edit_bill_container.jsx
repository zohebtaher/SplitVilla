import { connect } from "react-redux";
import EditBillForm from "./edit_bill_form";
import { updateBill, getAllBills, clearBillErrors } from "../../actions/bill_action";
import { closeModal } from "../../actions/modal_actions";
import React from "react";
import { evenSplit } from "../../utils/bill_splitting_util"

const mSTP = (state, ownProps) => {
    billId : ownProps.billId
    
    const bill = state.entities.bills[ownProps.billId]
   return { 
    currentUser: state.entities.users[state.session.id],
    friendships: Object.values(state.entities.friendships),
    currentUserId: state.session.id,
    errors: state.errors.bills,
    formType: 'Edit Expense',
    bill: {
        settle_up: bill.settleUp,
        amount: bill.amount,
        category: bill.category,
        description: bill.description,
        author_id: bill.authorId,
        lender_id: bill.lenderId,
        ower_id: bill.owerId,
        split_equally: bill.splitEqually,
        lender_paid: bill.lenderPaid,
        lender_name: bill.lenderName,
        lender_owed: bill.lenderOwed,
        ower_paid: bill.owerPaid,
        ower_owed: bill.owerOwed,
        num:  evenSplit(bill.amount),
        friend: { userName: bill.owerName, friendId: bill.owerId },
    }
   }
}

const mDTP = (dispatch) => ({
    processBill: (billId,bill) =>dispatch(updateBill(billId, bill)),
    closeModal: () => dispatch(closeModal()),
    getAllBills: () => dispatch(getAllBills()),
    clearErrors: () => dispatch(clearBillErrors())

})

export default connect(mSTP, mDTP)(EditBillForm)