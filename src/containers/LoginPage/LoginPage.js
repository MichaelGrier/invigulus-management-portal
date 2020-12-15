import React, {Component} from 'react';

import classes from './LoginPage.module.css';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';

class LoginPage extends Component {
  constructor() {
    super();
    this.state={
        email: "",
        password: "",
    }

    this.emailVal = this.emailVal.bind(this);
    this.passwordVal = this.passwordVal.bind(this);
    this.handleemailChange = this.handleemailChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
  }

  handleemailChange(event) {
    this.setState({email: event.target.value});
  }

  handlepasswordChange(event) {
    this.setState({password: event.target.value});
  }

  emailVal() {
    let emailv = document.getElementById("eml")
    let rg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid= rg.test(emailv.value)
    
    if (emailv.value === ""){
      document.getElementById("emailErrMsg").innerHTML="Required"
      }
    else if (!isValid) {
        document.getElementById("emailErrMsg").innerHTML="The email has an incorrect format"
      }
    else {
        document.getElementById("emailErrMsg").innerHTML=""
      }
  }

  passwordVal() {
    let passwdv = document.getElementById("pssword")
    if (passwdv.value === ""){
      document.getElementById("passwordErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("passwordErrMsg").innerHTML=""
      }
    }

  handleSubmit(event) {
    event.preventDefault();
    let emailv = document.getElementById("eml")
    let passwdv = document.getElementById("pssword")
    let rg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValid= rg.test(emailv.value)

    if (!emailValid)
    {
      alert("The email entered does not have the correct format.")
    }
    else if (emailv.value === "" || passwdv.value === "")
    {
      alert("A required field is missing.")
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
        <form className={classes.wrapper} 
            onSubmit={this.handleSubmit}>
            <fieldset>
            <h1 className={classes.header}>Log In</h1>
            <table>
              <tr>
                <td 
                  id={classes.cell} 
                  style={{textAlign:"right"}} >
                  <label 
                    htmlFor="email" 
                    style={labelstyle} >
                    Email:
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
        </fieldset>
        </form>
      </main>
    );
  }
}

export default LoginPage;