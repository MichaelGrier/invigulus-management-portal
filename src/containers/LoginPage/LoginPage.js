import React, {Component} from 'react';

import classes from './LoginPage.module.css';
import Button from '../../components/UI/Button/Button'; 
import FormContainer from '../../containers/FormContainer/FormContainer';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';
import LoginLink from '../../components/NavBar/LoginLink/LoginLink'

class LoginPage extends Component {
  buttonClickedHandler = () => {
    alert('You clicked a button');
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

    return (
      <main className={classes.main}>
        <FormContainer> 
            <Heading2>Log In</Heading2>
            <table>
          
            <tr><td id={classes.cell} style={{textAlign:"right"}} ><label for="email" style={labelstyle} >Email:</label></td>
            <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="eml" name="eml"/></td>
            </tr>
            
            <tr><td className={classes.cell} style={{textAlign:"right"}}><label for="pssword" style={labelstyle}>Password:</label></td>
            <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="pssword" name="pssword"/></td>
            </tr>
            </table> <br/>
            <Button>Submit</Button> <br/>
            <LoginLink>Forgot Password?</LoginLink>
        </FormContainer>
      </main>
    );
  }
}

export default LoginPage;