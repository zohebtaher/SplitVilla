import React from "react";
import { useSelector } from "react-redux";
import {
  calculateTotal,
  calculateTotalOwed,
} from "../utils/bill_splitting_util";

export const RightSidebar = (props) => {
  const currentUserId = useSelector((state) => state.session.id);
  let billsobjects = useSelector((state) => state.entities.bills);
  let bills = Object.values(billsobjects);
  const totalbills = calculateTotal(bills, currentUserId);
  const totalowed = calculateTotalOwed(bills, currentUserId);

  const total =
    bills.length === 0 ? (
      <div className="dash-expenses">
        <img src={window.nobill} alt="all paid up!" />
        <div>
          <h1>You have not added any expenses yet</h1>
          <p>To add a new expense, click the orange "Add an expense" button.</p>
        </div>
      </div>
    ) : (
      <div className="dash-expenses-breakdown">
        <ul className="expenses-header">
          <li>
            <h1 className="header-rightsidebar">Total Balance:</h1>
            <br />
            {totalbills}
          </li>
          <br />
          <br />
          <li>
            <h1 className="header-rightsidebar">You Are Owed:</h1>
            <br />
            {totalowed}
          </li>
        </ul>
      </div>
    );
  return (
    <div className="right-sidebar-info">
      <p>{total}</p>
      <br />
      <br />

      <span>Available on:</span>
      <i class="fab fa-apple fa-5x"></i>
      <i class="fab fa-android fa-5x "></i>

      <img height="60px" src={window.logo} />
    </div>
  );
};
