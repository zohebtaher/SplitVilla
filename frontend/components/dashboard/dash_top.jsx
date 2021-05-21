import { openModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import React from "react";

class DashTop extends React.Component {
  render() {
    return (
      <div className="dash-top-content">
        <section className="dashboard-text">Dashboard</section>
        <ul>
          <button
            className="button-orange"
            onClick={() => this.props.openModal("newBill")}
          >
            Add an Expense
          </button>
        </ul>
      </div>
    );
  }
}

const mSTP = (state) => ({});

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(DashTop);
