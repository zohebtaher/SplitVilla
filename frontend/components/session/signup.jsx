import React from 'react'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handleInput(type) {
        return (e) =>{
            this.setState({[type]: e.target.value})
        }
    }

    handlesubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
        
    }
    render () {
        return (
            <div classname>
                <h1>Sign Up!</h1>
                <form >
                    <label>Username:
                        <input type="text"
                         value={this.state.username} 
                         onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Email:
                        <input type="text"
                         value={this.state.email} 
                         onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input type="password"
                         value={this.state.password} 
                         onChange={this.handleInput('password')}
                         />
                    </label>
                    <button onClick={this.handlesubmit}>Sign Up</button>
                </form>
            </div>
        );
    }
};

export default Signup;