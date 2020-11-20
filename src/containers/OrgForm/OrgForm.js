import React, {Component} from 'react';

import classes from './OrgForm.module.css';
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
import Accordion from '../../components/Accordion/Accordion';

class OrgForm extends Component {
  buttonClickedHandler = () => {
    alert('You clicked a button');
  }
      state = {
      isOpen: true
      };
    
      onChange = isOpen => {
        this.setState({
          isOpen
        });
      };


  render () {
    const labelstyle = {
      color: "#3cB650",
	    fontFamily: "sans-serif",
      fontWeight: "400",
      padding: "20px",
      position: "relative",
      textRendering: "optimizeLegibility",
      display: "inline-block",
      width: "70%"
      };
    
      const textbxstyle = {
        width: "70%",
        padding: "12px 20px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "inline-block"
      }; 

      const textbxstyle2 = {
        width: "70%",
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
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius:"30px",
      };

      const textbxstyle3 = {
        width: "90%",
        padding: "12px 20px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "inline-block"
      }; 

      const textbxstyle4 = {
        width: "40%",
        padding: "12px 20px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "inline-block"
      }; 

      const { isOpen } = this.state;
    

    return (
      <div>
        <main className={classes.main}>
            <Heading2>   Manage Organizations</Heading2>
          <form className={classes.wrapper}>
              <fieldset>
                <div className={classes.flexChild}>
                <table>
                  <tr ><td className={classes.cell10} style={{textAlign:"right"}}><label for="lname" style={labelstyle}>Name:</label></td>
                  <td className={classes.cell11} style={{textAlign:"left"}}><input style={textbxstyle3} type="text" id="lnames" name="lnames"/></td>
                  <td className={classes.cell12} style={{textAlign:"left"}}><label for="lname" style={labelstyle}> ID:</label></td>
                  <td className={classes.cell13} style={{textAlign:"left"}}><input style={textbxstyle4} type="text" id="userid" name="userid"/></td>
                  </tr>

                  </table>
                  <hr></hr>
                </div>
                <Accordion isOpen={isOpen} onChange={this.onChange} label={"Description"}>
              <div>
              
                
              <table>

              <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="orgname" style={labelstyle}>Name:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} type="text" id="orgname" name="orgname"/></td>
                </tr>

              <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="orgID" style={labelstyle}>ID:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} type="text" id="orgID" name="orgID"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="addresstype" style={labelstyle}>Type of Address (Primary/Billing/Technical):</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} type="text" id="addresstype" name="addresstype"/></td>
                </tr>


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
            
                {/* <tr><td className={classes.cell1}></td>
                <td className={classes.cell2} style={{rowspan: "2", textAlign:"right"}}><Button>Add User</Button></td></tr> */}

                </table> 
                </div>
                </Accordion>
                <Accordion isOpen={!isOpen} onChange={this.onChange} label={"Contact"}>
                <div>
                  <br/>
                <table>

                <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="contacttype" style={labelstyle}>Type of Contact (Primary/Billing/Technical):</label></td>
                <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input style={textbxstyle} type="text" id="contacttype" name="contacttype"/></td>
                </tr>

            
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

                {/* <tr><td className={classes.cell5} style={{textAlign:"center", paddingLeft: "0px", rowspan: "2" }}><Button>Edit User</Button></td>
                <td className={classes.cell6} style={{textAlign:"left", paddingLeft: "0px"}}><Button>Submit</Button></td>
                </tr> */}
                </table>
                </div>
                </Accordion>
                <Accordion isOpen={!isOpen} onChange={this.onChange} label={"Exams"}>
                <div>   
                  <table>
                    <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="description" style={labelstyle}>Exam Description:</label></td>
                    <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input style={textbxstyle} type="text" id="description" name="description"/></td>
                    </tr>
                
                    <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="tds" style={labelstyle}>Test Delivery System (URL):</label></td>
                    <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="tds" name="tds"/></td>
                    </tr>
                  </table>
                  <table>
                    <tr><td className={classes.cell14} style={{textAlign:"right"}}><label for="Img Capture" style={labelstyle}>Image Capture Setting:</label></td>
                    <td className={classes.cell15} style={{textAlign: "right"}}><label style={labelstyle} style={{paddingBottom: "0", color: "#3cB650"}}>No</label><br/><label style={labelstyle} style={{paddingBottom:"0", color: "#3cB650"}}>Yes</label></td>
                    <td className={classes.cell16} style={{textAlign:"center"}}><RadioButton/></td>
                    </tr>
                  </table>
                  <table>
                  <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="frameInterval" style={labelstyle}>Frame Interval:</label></td>
                    <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input style={textbxstyle} type="text" id="frameInterval" name="frameInterval"/></td>
                    </tr>
                
                    <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="anomalyDuration" style={labelstyle}>Anomaly Duration:</label></td>
                    <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="anomalyDuration" name="anomalyDuration"/></td>
                    </tr>

                    <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="smoothingFrame" style={labelstyle}>Smoothing Frame:</label></td>
                    <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="smoothingFrame" name="smoothingFrame"/></td>
                    </tr>

                 </table>
                </div>
                </Accordion>
                <div className={classes.flexChild}>
                  <table>
                  <tr>
                  <td className={classes.cell7} style={{textAlign:"right", paddingRight: "2%", paddingTop:"2%"}}><button style={buttonstyle}>Edit</button></td>
                  <td className={classes.cell8} style={{textAlign:"left", paddingLeft: "2%", paddingTop:"2%"}}><button style={buttonstyle}>Add</button></td>
                  {/* <td className={classes.cell9} style={{textAlign:"left"}}><button style={buttonstyle}>Submit</button></td> */}
                  </tr>
                  </table>
                </div>
          </fieldset>
          </form>
        </main>
      </div>
    );
  }
}

export default OrgForm;