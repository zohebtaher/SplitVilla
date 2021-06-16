import React from "react";
import AllUsersContainer from "../users/all_users_container";
import NewBillContainer from "../bills/new_bill_container";
import EditBillContainer from "../bills/edit_bill_container";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  stopProp(e) {
    e.stopPropagation();
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let component = null;
    switch (this.props.modal.formName) {
      case "addFriend":
        component = <AllUsersContainer />;
        break;
      case "newBill":
        component = <NewBillContainer />;
        break;
      case "editBill":
        component = <EditBillContainer billId={this.props.modal.objectId} />;
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={this.stopProp}>
          <div className="modal-header"></div>
          <br />
          {component}
          <br />
          <div class="modal-footer"></div>
        </div>
      </div>
    );
  }
}

export default Modal;
