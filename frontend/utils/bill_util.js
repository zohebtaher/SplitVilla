export const deleteBill = (billId) =>
  $.ajax({
    url: `/api/bills/${billId}`,
    method: "DELETE",
    data: { billId },
  });

export const createBill = (bill) =>
  $.ajax({
    url: "/api/bills",
    method: "POST",
    data: { bill },
  });

export const updateBill = (billId, bill) =>
  $.ajax({
    url: `/api/bills/${billId}`,
    method: "PATCH",
    data: { bill },
  });

export const allBills = () =>
  $.ajax({
    url: "/api/bills",
    method: "GET",
  });

export const showBill = (billId) =>
  $.ajax({
    url: `/api/bills/${billId}`,
    method: "GET",
    data: { billId },
  });
