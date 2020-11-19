import React, {Component} from 'react';

import classes from './UserPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import TextBox from '../../components/Form Inputs/TextBox/TextBox';
import FormLabel from '../../components/Form Inputs/FormLabel/FormLabel';
import DropDown from '../../components/Form Inputs/DropDown/DropDown';
import RadioButton from '../../components/Form Inputs/RadioButton/RadioButton';
import Button from '../../components/UI/Button/Button'; 
import FormContainer from '../../containers/FormContainer/FormContainer';
import Heading1 from '../../components/Heading1/Heading1';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';
import LoginLink from '../../components/NavBar/LoginLink/LoginLink'
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

class UserPage extends Component {
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
      textAlign: "right",
      width: "70%"
      };
    
      const textbxstyle = {
        width: "90%",
        padding: "12px 20px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "inline-block"
      }; 

      const textbxstyle2 = {
        width: "45%",
        padding: "12px 20px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "inline-block"
      }; 


    return (
      <div>
        <NavBar />
        <main className={classes.main}>
            <Heading2>Add or Edit Users</Heading2>
          <form className={classes.wrapper}>
              <fieldset>
              
              <div className={classes.flexChild1}>
              <table>
            
                <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="fname" style={labelstyle}>First Name:</label></td>
                <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input style={textbxstyle} type="text" id="fname" name="fname"/></td>
                </tr>
            
                <tr ><td className={classes.cell1} style={{textAlign:"right"}}><label for="lname" style={labelstyle}>Last Name:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="lname" name="lname"/></td>
                </tr>

                <tr ><td className={classes.cell1} style={{textAlign:"right"}}><label for="email" style={labelstyle}>Email:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="email" name="email"/></td>
                </tr>

                <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="phone" style={labelstyle}>Phone:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="phone" name="phone"/></td>
                </tr>

                <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="picture" style={labelstyle}>Profile Picture:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="picture" name="picture"/></td>
                </tr>

                <tr><td className={classes.cell1} style={{textAlign:"right"}}>         </td>
                <td className={classes.cell2} style={{textAlign:"left"}}></td>
                </tr>

                <br/>
                <tr><td className={classes.cell1}></td>
                <td className={classes.cell2} style={{rowspan: "2", textAlign:"right"}}><Button>Add User</Button></td></tr>

                </table> 
                
                </div>
                <div className={classes.flexChild2}>
                <table>

            
                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="street" style={labelstyle}>Street:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} type="text" id="street" name="street"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="city" style={labelstyle}>City:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} type="text" id="city" name="city"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="state" style={labelstyle}>State/Province:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} type="text" id="state" name="state"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="zip" style={labelstyle}>Zip Code:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} type="text" id="zip" name="zip"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="country" style={labelstyle}>Country:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} type="text" id="country" name="country"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}>    </td>
                <td className={classes.cell4} style={{textAlign:"left"}}></td>
                </tr>
                <br/>
                <tr><td className={classes.cell5} style={{textAlign:"center", paddingLeft: "0px" }}><Button>Edit User</Button></td>
                <td className={classes.cell6} style={{textAlign:"left", paddingLeft: "0px"}}><Button>Submit</Button></td>
                </tr>
                
                </table>
                </div>
          </fieldset>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}

export default UserPage;