export const acceptFriendship = (user_id, friend_id) => (
    $.ajax({
        url: '/api/friendships',
        method: 'POST',
        data: {friendship: {user_id, friend_id}}
    })
)

export const deleteFriendship = userId => (
    $.ajax({
        url: `/api/friendships/${userId}`,
        method: 'DELETE'
    })
)

export const fetchFriendships = userId => (
    $.ajax({
        url: `/api/users/${userId}/friendships`,
        method: 'GET'
    })
)