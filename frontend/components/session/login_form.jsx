import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handlesubmit = this.handlesubmit.bind(this);
        this.displayErrors = this.displayErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    displayErrors() {
        return (
            <div>
                <h3>Wrong Email or Password.Please try again</h3>
                <button onClick={()=> this.props.clearErrors()}>x</button>
            </div>
        )
    }

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {email: "demo@demo.com", password: "password"}
        this.props.login(demoUser);
    }

    handleInput(type) {
        return (e) =>{
            this.setState({[type]: e.target.value})
        }
    }

    handlesubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        
    }
    render () {
        return (
            <div >
                {this.props.errors.length === 0 ? null: <div>{this.displayErrors()}</div>}
                <h1>SplitVilla</h1>
                <div>
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
                    <p>or</p>
                    <button onClick ={this.demoLogin}>Demo User</button>
                </form>
                </div>
            </div>
        );
    }
};

export default LoginForm;