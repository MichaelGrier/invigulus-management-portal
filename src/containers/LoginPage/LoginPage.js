import React, {Component} from 'react';
import {Auth} from 'aws-amplify';
import {withRouter, Link} from 'react-router-dom';

import classes from './LoginPage.module.css';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';

class LoginPage extends Component {
  constructor() {
    super();
    this.state={
      email: "",
      password: ""
    }

    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.handleemailChange = this.handleEmailChange.bind(this);
    this.handlepasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  emailValidation() {
    let emailField = document.getElementById("eml")

    if (emailField.value === "") {
      document.getElementById("passwordErrMsg").innerHTML="Required"
    } else {
      document.getElementById("passwordErrMsg").innerHTML=""
    }
  }

  passwordValidation() {
    let passwordField = document.getElementById("pssword");

    if (passwordField.value === "") {
      document.getElementById("passwordErrMsg").innerHTML="Required"
    } else {
      document.getElementById("passwordErrMsg").innerHTML=""
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let emailField = document.getElementById("eml")
    let passwordField = document.getElementById("pssword")

    if (emailField.value === "" || passwordField.value === "") {
      alert("A required field is missing.")
    } 

    // cognito integration
    try {
      // send login request, assign response to a variable
      const user = await Auth.signIn(this.state.email, this.state.password);
      console.log(user);
      // set global state
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(user)
      // redirect to home
      this.props.history.push('/');
    } catch(error) {
      alert('something went wrong, try logging in again');
    }
  }

  render () {
    const labelstyle = {
      color: "#3cB650",
	    fontFamily: "sans-serif",
      fontWeight: "400",
      padding: "20px",
      position: "relative",
      textRendering: "optimizeLegibility",
      display: "inline-block",
      textAlign: "right"
      };
    
      const textbxstyle = {
        width: "50%",
        padding: "12px 20px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "inline-block"
      }; 

      const buttonstyle = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "10px 22px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: ".75rem 0 1.75rem 0",
        cursor: "pointer",
        borderRadius:"30px",
      };

    return (
      <main className={classes.main}>
        <form 
          className={classes.wrapper} 
          onSubmit={this.handleSubmit}
        >
          <fieldset>
            <Heading2>Log In</Heading2>
            <table>
              <tr>
                <td 
                  id={classes.cell} 
                  style={{textAlign:"right"}} >
                  <label 
                    htmlFor="email" 
                    style={labelstyle} >
                    Email/User Name:
                  </label>
                </td>
                <td 
                  className={classes.cell2} 
                  style={{textAlign:"left"}}>
                  <input 
                    style={textbxstyle} 
                    type="text" 
                    id="eml" 
                    name="eml"
                    onChange={this.handleemailChange}
                    onBlur={this.emailVal}/>
                    <br/>
                    <span 
                      id="emailErrMsg"
                      style={{color:"red"}}>
                    </span>
                </td>
            </tr>
            <tr>
              <td 
                className={classes.cell} 
                style={{textAlign:"right"}}>
                <label 
                  htmlFor="pssword" 
                  style={labelstyle}>
                  Password:
                </label>
              </td>
              <td 
                className={classes.cell2} 
                style={{textAlign:"left"}}>
                <input 
                  style={textbxstyle} 
                  type="password" 
                  id="pssword" 
                  name="pssword"
                  onChange={this.handlepasswordChange}
                  onBlur={this.passwordVal}/>
                  <br/>
                    <span 
                      id="passwordErrMsg"
                      style={{color:"red"}}>
                    </span>
              </td>
            </tr>
            </table> 
            <br/>

            <input 
              type="submit"
              value= "Submit"
              style={buttonstyle}>
            </input> 
            <br/>

            <Link 
              to={{pathname:'/reset-password'}}
              className={classes.resetPasswordLink}
            >
              Forgot Your Password?
            </Link>
          </fieldset>
        </form>
      </main>
    );
  }
}

export default withRouter(LoginPage);