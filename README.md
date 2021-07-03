# README

# SplitVilla

Splitvilla is designed to clone the expense-tracking website Splitwise. It is a free tool for family and friends to track bills, shared expenses and other IOUs so everyone is aware of who owes what. Splitvilla allows you to create, update , delete and track bills between individuals. Signup and experience a simple expense tracking tool.

[Take me to SplitVilla Live](https://splitvilla.herokuapp.com/#/)

SplitVilla was built with the following technologies:

- React/Redux and Javascript to manage user inputs , sending requests to the backend for creating/updating/deleting database records and to update the page display to reflect those changes

  - React v17.0.2
  - Redux v4.1.0
  - Node v10.13.0

- Ruby on Rails to create a database, manage relations between data types and handle creation and deletion of records and associations
  - Rails v5.2.6
  - Ruby v2.5.1p57
  
![splitvilla-login](https://user-images.githubusercontent.com/37554840/124335338-f8f74080-db67-11eb-9443-641dbec01514.gif)

# Friending

When not logged in, visitors to SplitVilla are only able to access the main splash page as well as the login and sign up pages. Once logged in users have access to all of their information including all bills created and shared with them . Users of splitvilla can only create bills with friends. In order to implement this in the backend two separate tables were created , one for requests the other for friendships.

```ruby
 def create

       @friendship = Friendship.new(req_params)  #user_id: user_id, friend_id: friend_d
       @friendship2 = Friendship.new(user_id: req_params.dig(:friend_id), friend_id: req_params.dig(:user_id))
       @request = Request.find_by(receiver_id: req_params.dig(:user_id), requestor_id: req_params.dig(:friend_id))

           if @friendship.save && @friendship2.save
               @request.destroy
               render '/api/friendships/show', status: 201
           else
               render json: ['Couldnt create friendship'], status: 422
           end
   end
```

```ruby
def create
        @request = Request.new(req_params)
            if @request.save
                @requestor = User.find_by(id: params[:request][:requestor_id])
                @receiver = User.find_by(id: params[:request][:receiver_id])
                    render 'api/requests/show'
            else
                render json: @request.errors.full_messages, status: 422
            end

    end
```

![chrome-friend2](https://user-images.githubusercontent.com/37554840/124335922-057c9880-db6a-11eb-8b2b-c6b2772e667f.gif)

This allowed for the following associations which were used as conditionals in rendering the appropriate " Accept Request, Decline Request, Requested , Add Friend" buttons in the front end


```ruby
        has_many :requests_as_requestor,
            foreign_key: :requestor_id,
            class_name: :Request,
            dependent: :destroy

        has_many :requests_as_receiver,
            foreign_key: :receiver_id,
            class_name: :Request,
            dependent: :destroy

        has_many :friendships,
            foreign_key: :user_id,
            class_name: :Friendship,
            dependent: :destroy

        has_many :friends,
            through: :friendships,
            dependent: :destroy
```


# Billing and Transactions

Similar to friending a user can only create a bill when logged in and can only make bills with other users who are friended and not just a user of the application. In order to implement this various associations were passed from the back end to the front end which then were conditionally used to render bill creation

```ruby
    json.lenderPaid @bill.lender_paid
    json.lenderOwed @bill.lender_owed
    json.owerPaid @bill.ower_paid
    json.owerOwed @bill.ower_owed
    json.lenderName @bill.lender.username
    json.owerName @bill.ower.username
    json.id @bill.id
```
![splitvilla-milk (3)](https://user-images.githubusercontent.com/37554840/124336569-7fae1c80-db6c-11eb-8225-034bdfd2ca40.gif)

# Comments

Comments are associated with a bill and only the lender and ower are allowed to comment on that bill. I was having trouble using ActiveRecord associations to connect the separate models and hence designed a system in the frontend that handled that logic

```
const mapStateToProps = (state, ownProps) => {
  const { bill } = ownProps;
  let billComments = [];
  const allComments = Object.values(state.entities.comments);
  allComments.forEach((comment) => {
    if (
      bill.id === comment.bill_id &&
      (bill.lenderId === comment.author_id || bill.owerId === comment.author_id)
    ) {
      billComments.push(comment);
    }
  });

  return {
    currentUser: state.entities.users[state.session.id],
    comments: billComments,
    billId: bill.id,
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    allComments: () => dispatch(allComments()),
  };
};
```
![chrome-capture](https://user-images.githubusercontent.com/37554840/124337389-55f6f480-db70-11eb-99b0-382f71119fe8.gif)


