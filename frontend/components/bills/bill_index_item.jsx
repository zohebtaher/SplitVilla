
import React from "react";


class BillIndexItem extends React.Component {


    render() { 
      
        const { bill, currentUserId } = this.props
        // debugger
        if (!bill.lenderId || !bill.owerId) return null;
        // let billAuthor = 
        //     bill.authorId === bill.lenderId ? bill.lenderName: bill.owerName;
        //     // debugger
        let payer;
        let borrower;
        let amountLent;
        if (currentUserId === bill.lenderId) {
            payer = 'you'
            borrower = bill.owerName
            amountLent = (
                <p className='money-money'>
                    ${parseFloat(bill.lenderOwed).toFixed(2)}
                </p>
            );
        } else if (currentUserId === bill.owerId) {
            // debugger
            payer = bill.lenderName;
            borrower = "you"
            amountLent = (
              <p className="money-money">
                ${parseFloat(bill.lenderOwed).toFixed(2)}
              </p>
            );

        }  
        
        return (
          <div className="bill-index-item"  key ={bill.id}>
            <div className="bill-index-item-header">
              <div className="bill-info-lineone">
              <div className="bill-index-item-category">
                  <p>Category: {bill.category}</p>
              </div>
              <div className="bill-index-item-description">
                <p>Description:{bill.description}</p>
              </div>
              </div>
              
              <div className="bill-index-item-header-right">
                <div className="bill-index-item-header-paid">
                  <h4>{payer} paid</h4>
                  <p>${parseFloat(bill.amount).toFixed(2)}</p>
                </div>
                <div className="bill-index-item-header-lent">
                  <h4>
                    {borrower} owes {payer} {amountLent}
                  </h4>
                  
                </div>
              </div> 
                <div className="bill-index-item-button">
                  <li>
                <button onClick={() => this.props.deleteBill(bill.id)}>
                  Delete Bill
                </button>
                </li>
                <li>
                <button onClick ={()=>this.props.openModal("editBill", bill.id)}>Edit Bill</button>
                </li>
               
              </div>
            </div>
            
            
          </div>
          
        );
    }

}


export default BillIndexItem


