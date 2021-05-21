import React from "react";
import BillIndexItemContainer from "./bill_index_item_container";


class BillIndex extends React.Component {
  componentDidMount() {
    this.props.getAllBills();
  }

  componentDidUpdate(prevProps) {
      if (this.props.bills.length !== prevProps.bills.length) {
          this.props.getAllBills();
      }
  }

  render() {
    const { bills } = this.props;
    const billIndex =
      (!bills || bills.length === 0) ? (
        <div> No Expenses </div>
      ) : (
        <div className="main-bill-index">
          <ul>
            {bills.map((bill) => {
            return <BillIndexItemContainer key={bill.id} bill={bill} />;
            })}
          </ul>
        </div>
      );
    return (
        billIndex
    )
  }
}

export default BillIndex;





