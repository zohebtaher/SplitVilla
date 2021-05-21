export const decimalConvert = (money) => {
  return parseFloat(money).toFixed(2).toString();
};

export const evenSplit = (money, split = 2) => {
  const value = parseFloat(money);
  if (isNaN(value)) return "0.00";
  const splitMoney = value / split;
  return splitMoney.toFixed(2).toString();
};

export const calculateTotalOwed = (bills, userId) => {
  let total = 0;

  bills.forEach((bill) => {
    if (userId === bill.groups[0].userId) {
      total += parseFloat(bill.groups[1].owedAmount);
    } else {
      total += parseFloat(bill.groups[0].owedAmount);
    }
  });

  return total.toFixed(2).toString();
};

export const calculateTotal = (bills, userId) => {
  let total = 0;
  bills.forEach((bill) => {
    if (userId === bill.groups[0].userId) {
      total += parseFloat(bill.groups[0].netBalance);
    } else {
      total += parseFloat(bill.groups[1].netBalance);
    }
  });
};
