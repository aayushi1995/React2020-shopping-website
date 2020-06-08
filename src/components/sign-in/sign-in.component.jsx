import React from 'react';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email : '',
            password : ''
        })
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name] : value })
    }
    render() {
        return (
            <div>
                <h2>I already have an account</h2>
                <p>Sign In with your email and password</p>

                <form onClick={this.handleSubmit}>
                    <input name="email" type="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} required 
                    />
                    <label for="email">Email</label>
                    <input 
                        name="password" 
                        type="password" 
                        value={this.state.password}  
                        onChange={this.handleChange}   
                        required  
                    />
                    <label for="email">Password</label>
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}

export default SignIn;