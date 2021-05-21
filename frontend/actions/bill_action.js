import * as APIUtil from "../utils/bill_util";

export const RECEIVE_BILLS = "RECEIVE_BILLS";
export const REMOVE_BILL = "REMOVE_BILL";
export const RECEIVE_BILL = "RECEIVE_BILL";
export const RECEIVE_BILL_ERRORS = "RECEIVE_BILL_ERRORS";
export const CLEAR_BILL_ERRORS = "CLEAR_BILL_ERRORS";

//Action Creators

const receiveBill = (bill) => ({
  type: RECEIVE_BILL,
  bill,
});

const receiveBills = (bills) => ({
  type: RECEIVE_BILLS,
  bills,
});

const removeBill = (bill) => ({
  type: REMOVE_BILL,
  bill,
});

export const receiveBillErrors = (errors) => ({
  type: RECEIVE_BILL_ERRORS,
  errors,
});

export const clearBillErrors = () => ({
  type: CLEAR_BILL_ERRORS,
});

export const getAllBills = () => (dispatch) =>
  APIUtil.allBills().then(
    (bills) => dispatch(receiveBills(bills)),
    (errors) => dispatch(receiveBillErrors(errors))
  );

export const createBill = (bill) => (dispatch) =>
  APIUtil.createBill(bill).then(
    (newBill) => dispatch(receiveBill(newBill)),
    (errors) => dispatch(receiveBillErrors(errors))
  );

export const updateBill = (billId, bill) => (dispatch) =>
  APIUtil.updateBill(billId, bill).then(
    (updateBill) => dispatch(receiveBill(updateBill)),
    (errors) => dispatch(receiveBillErrors(errors))
  );

export const findBill = (billId) => (dispatch) => {
  return APIUtil.showBill(billId).then(
    (bill) => dispatch(receiveBill(bill)),
    (errors) => dispatch(receiveBillErrors(errors))
  );
};

export const deleteBill = (billId) => (dispatch) =>
  APIUtil.deleteBill(billId).then(
    (bill) => dispatch(removeBill(bill)),
    (errors) => dispatch(receiveBillErrors(errors))
  );
