import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.props.logInUser(this.state)
        
    }
    render () {
        return (
            <div classname= "putsomthinghere">
                <h1>SplitVilla</h1>
                <form onSubmit = {this.handlesubmit} >
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
                    <button type='submit'>Log in</button>
                </form>
            </div>
        );
    }
};

export default LoginForm;