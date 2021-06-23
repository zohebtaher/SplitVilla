import React from "react";
import { evenSplit } from "../../utils/bill_splitting_util";

class EditBillForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = props.bill;
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .processBill(this.props.billId, this.state)
      .then(() => this.props.getAllBills())
      .then(() => this.props.closeModal());
  }

  // handleSelect() {
  //   return (e) => {
  //     let currentFriend = { friendId: "", userName: "" };
  //     this.props.friendships.forEach((friend) => {
  //       if (friend.friendId === parseInt(e.currentTarget.value, 10))
  //         currentFriend = friend;
  //     });
  //     this.setState({
  //       lender_id: this.props.currentUserId,
  //       ower_id: currentFriend.friendId,
  //       friend: currentFriend,
  //     });
  //   };
  // }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }
  handleAmount() {
    // const that = this;
    return (e) => {
      const num = evenSplit(e.currentTarget.value);
      this.setState({
        amount: e.currentTarget.value,
        num: num,
        lender_paid: e.currentTarget.value,
        lender_owed: num,
        ower_owed: num,
      });
    };
  }
  handleSwitch() {
    return () => {
      let newLender = this.state.ower_id;
      let newOwer = this.state.lender_id;

      this.setState({
        lender_id: newLender,
        ower_id: newOwer,
      });
    };
  }

  showErrors() {
    return (
      <div className="form-errors">
        <h2>The following errors occured:</h2>
        <ul>
          <li>Enter a description please </li>
          <li>Enter an amount please</li>
        </ul>
        <button
          className="button-orange"
          onClick={() => this.props.clearErrors()}
        >
          X
        </button>
      </div>
    );
  }

  render() {
    const { description, amount, lender_name, ower_id, friend, num, category } =
      this.state;
    const billform = (
      <form onSubmit={this.handleSubmit} className="bill-form-modal">
        <div className="bill-form-inputs">
          <div className="bill-category">
            <select
              className="selector"
              value={category}
              onChange={this.handleChange("category")}
            >
              <option value="" disabled>
                Choose a category
              </option>
              <option value="general ">general</option>
              <option value="groceries">groceries</option>
              <option value="entertainment">entertainment</option>
              <option value="transportation ">transportation</option>
              <option value="utilities">utilities</option>
              <option value="home">home</option>
              <option value="food">food</option>
            </select>
            {/* categorySelect */}
          </div>
          <div className="bill-info">
            <input
              type="text"
              onChange={this.handleChange("description")}
              value={description}
              placeholder="Enter a description"
            />
            <br /> <br />
            <div className="amount-container">
              <p>$</p>
              <input
                type="text"
                onChange={this.handleAmount()}
                value={amount}
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="bill-paid-info">
          <p>Paid by</p>
         <p className="payer-name">{lender_name}</p>
         <br />
          <p>and split equally.</p>
        </div>
        <p>(${num}/person)</p>
        <br />
        <div className="modal-footer">
          <button onClick={this.props.closeModal}>Cancel</button>
          <button type="submit" className="button-green">
            Save
          </button>
        </div>
        {this.props.errors.length === 0 ? null : <div>{this.showErrors()}</div>}
      </form>
    );

    return <div>{billform}</div>;
  }
}

export default EditBillForm;
