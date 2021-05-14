export const sendRequest = (requestor_id, receiver_id) => (
    $.ajax ({
        url: '/api/requests',
        method: 'POST',
        data: {request: { requestor_id, receiver_id}}
    })
)

export const deleteRequest =  requestId => (
    $.ajax ({
        url: `/api/request/${requestId}`,
        method: 'DELETE'
    })
)


export const fetchUserRequests = userId => (
    $.ajax ({
        url: `/api/users/${userId}/requests`,
        method: 'GET'
    })
)