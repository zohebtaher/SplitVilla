import React from 'react';
import { Link } from 'react-router-dom';

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

    componentDidMount(){
        this.props.removeErrors();
    }

    showErrors() {
        return (
            <div className='signup-errors'>
                <h2>List of errors:</h2>
                <ul>
                    {this.props.errors.map((error,idx)=>(
                        <li key={idx}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        )
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
            <div className='login-signup-form-container'>
                <Link to='/'>img src</Link>
                <div className='signup-form'>
                    {this.props.errors.length === 0 ? null : <div>{this.showErrors()}</div> }
                    <h1>INTRODUCE YOURSELF</h1>
                    <form onSubmit ={this.handlesubmit} >
                        <label><h2>Hi there! My name is</h2></label>
                        <br/>
                            <input type="text"
                            value={this.state.username} 
                            onChange={this.handleInput('username')}
                            />
                        <br/>
                        
                        <label>Here's my <strong>email address:</strong></label>
                        <br/>
                            <input type="text"
                            value={this.state.email} 
                            onChange={this.handleInput('email')}
                            />
                        <br/>
                        <label>And here's my <strong>password:</strong></label>
                        <br/>
                            <input type="password"
                                value={this.state.password} 
                                onChange={this.handleInput('password')}
                            />
                        <br/>    
                        <button className='orange-button' type='submit'>Sign me up</button>
                    </form>
               </div>     
            </div>
        );
    }
};

export default Signup;