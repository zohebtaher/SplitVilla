import { getAllBills } from "../../actions/bill_action";
import { allComments } from "../../actions/comment_actions";
import { connect } from "react-redux";
import BillIndex from "./bill_index";

const mapStateToProps = (state) => {
  return {
    bills: Object.values(state.entities.bills),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllBills: () => dispatch(getAllBills()),
  allComments: () => dispatch(allComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex);
