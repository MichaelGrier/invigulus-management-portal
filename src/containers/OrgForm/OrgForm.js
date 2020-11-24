import React, {Component} from 'react';

import classes from './OrgForm.module.css';
import RadioButton from '../../components/Form Inputs/RadioButton/RadioButton';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';
import Accordion from '../../components/Accordion/Accordion';
import Accordion2 from '../../components/Accordion/Accordion2';
import Accordion3 from '../../components/Accordion/Accordion3';
import Accordion4 from '../../components/Accordion/Accordion4';
import Accordion5 from '../../components/Accordion/Accodion5';

class OrgForm extends Component {
  buttonClickedHandler = () => {
    alert('You clicked a button');
      }
      state = {
      isOpen: true,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false, 
      isOpen5: false,
      };
      
      constructor() {
        super();
        this.state = {
          name: '',
          ID: '',
          typeofaddress:'',
          street:'',
          city:'',
          statea:'',
          zipcode:'',
          country:'',
          typeofaddress2:'',
          street2:'',
          city2:'',
          statea2:'',
          zipcode2:'',
          country2:'',
          typeofcontact:'',
          fname:'',
          lname:'',
          phone:'',
          email:'',
          typeofcontact2:'',
          fname2:'',
          lname2:'',
          phone2:'',
          email2:'',
          imagecapture:'',
          frameinterval:'',
          anomalyduration:'',
          smoothingframe:'',
          emailError: ''
        }
      }

      onChange = isOpen => {
        this.setState({
          isOpen
        });
      };

      onChange2 = isOpen2 => {
        this.setState({
          isOpen2
        });
      };

      onChange3 = isOpen3 => {
        this.setState({
          isOpen3
        });
      };

      onChange4 = isOpen4 => {
        this.setState({
          isOpen4
        });
      };

      onChange5 = isOpen5 => {
        this.setState({
          isOpen5
        });
      };

    ValidatorN() {

      if (this.state.name === "")
      {
        this.setState ({emptyErrorName: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorName: ""})
      }
    }
    ValidatorTofA() {
      if (this.state.typeofaddress === "" )
      {
        this.setState ({emptyErrorTofA: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorTofA: ""})
      }
    }
    ValidatorStr() {
      if (this.state.street === "")
      {
        this.setState ({emptyErrorStreet: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorStreet: ""})
      }
    }
    ValidatorCit() {
      if (this.state.city === "" )
      {
        this.setState ({emptyErrorCity: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorCity: ""})
      }
    }

    ValidatorSt() {
      if (this.state.statea === "")
      {
        this.setState ({emptyErrorState: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorState: ""})
      }
    }
    ValidatorZC() {
      if (this.state.zipcode === "")
      {
        this.setState ({emptyErrorZipcode: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorZipcode: ""})
      }
    }
    ValidatorCountry() {
      if (this.state.country === "")
      {
        this.setState ({emptyErrorCountry: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorCountry: ""})
      }
    }
    ValidatorTofC () {
      if (this.state.typeofcontact === "" )
      {
        this.setState ({emptyErrorTofC: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorTofC: ""})
      }
    }
    Validatorfname() {
      if (this.state.fname === "")
      {
        this.setState ({emptyErrorfname: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorfname: ""})
      }
    }
    Validatorlname() {
      if (this.state.lname === "" )
      {
        this.setState ({emptyErrorlname: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorlname: ""})
      }
    }
    Validatorphone() {
      if (this.state.phone === "")
      {
        this.setState ({emptyErrorphone: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrorphone: ""})
      }
    }
    Validatoremail() {
      if (this.state.email === "")
      {
        this.setState ({emptyErroremail: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErroremail: ""})
      }
    }
    Validatoremailrg() {
    let rg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid= rg.test(this.state.email)
    if (isValid)
    {
      this.setState ({emailError: "The email address entered has an incorrect format"})
      alert("The email address entered has an incorrect format")
    }
    else 
    {
      this.setState ({emailError: ""})
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

      // const textbxstyle3 = {
      //   width: "90%",
      //   padding: "12px 20px",
      //   margin: "8px 0",
      //   border: "1px solid #ccc",
      //   borderRadius: "4px",
      //   boxSizing: "border-box",
      //   display: "inline-block"
      // }; 

      // const textbxstyle4 = {
      //   width: "40%",
      //   padding: "12px 20px",
      //   margin: "8px 0",
      //   border: "1px solid #ccc",
      //   borderRadius: "4px",
      //   boxSizing: "border-box",
      //   display: "inline-block"
      // }; 

      const { isOpen } = this.state;
      const { isOpen2 } = this.state;
      const { isOpen3 } = this.state;
      const { isOpen4 } = this.state;
      const { isOpen5 } = this.state;
      
    return (
      <div>
        <main className={classes.main}>
            <Heading2>   Manage Organizations</Heading2>
          <form className={classes.wrapper}>
              <fieldset>
                 <div className={classes.flexChild}>
                <table>
                    <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="orgname" style={labelstyle}>Name:</label></td>
                    <td className={classes.cell4} style={{textAlign:"left"}}><input onBlur = {()=> this.ValidatorN()} onChangeText={(text) => {this.setState({ name: text })}} style={textbxstyle2} type="text" id="orgname" name="orgname"/><p style={{color:"red"}}>{this.state.emptyErrorName}</p></td>
                    </tr>

                  <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="orgID" style={labelstyle}>ID:</label></td>
                    <td className={classes.cell4} style={{textAlign:"left"}}><input onChangeText={(text) => {this.setState({ ID: text })}} style={textbxstyle2} type="text" id="orgID" name="orgID"/></td>
                    </tr>
                  </table>
                  <hr></hr>
                </div> 
                <Accordion isOpen={isOpen} onChange={this.onChange} label={"Address"}>
              <div>

              <table>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="addresstype" style={labelstyle}>Type of Address (Primary/Billing/Technical):</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input onBlur = {()=> this.ValidatorTofA()} style={textbxstyle2} onChangeText={(text) => {this.setState({ typeofaddress: text })}} type="text" id="addresstype" name="addresstype"/><p style={{color:"red"}}>{this.state.emptyErrorTofA}</p></td>
                </tr>


              <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="street" style={labelstyle}>Street:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input onBlur = {()=> this.ValidatorStr()} onChangeText={(text) => {this.setState({ street: text })}} style={textbxstyle2} type="text" id="street" name="street"/><p style={{color:"red"}}>{this.state.emptyErrorStreet}</p></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="city" style={labelstyle}>City:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input onBlur = {()=> this.ValidatorCit()} onChangeText={(text) => {this.setState({ city: text })}} style={textbxstyle2} type="text" id="city" name="city"/><p style={{color:"red"}}>{this.state.emptyErrorCity}</p></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="state" style={labelstyle}>State/Province:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input onBlur = {()=> this.ValidatorSt()} style={textbxstyle2} onChangeText={(text) => {this.setState({ statea: text })}} type="text" id="state" name="state"/><p style={{color:"red"}}>{this.state.emptyErrorState}</p></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="zip" style={labelstyle}>Zip Code:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input onBlur = {()=> this.ValidatorZC()} style={textbxstyle2} onChangeText={(text) => {this.setState({ zipcode: text })}} type="text" id="zip" name="zip"/><p style={{color:"red"}}>{this.state.emptyErrorZipcode}</p></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="country" style={labelstyle}>Country:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input onBlur = {()=> this.ValidatorCountry()} style={textbxstyle2} onChangeText={(text) => {this.setState({ country: text })}}type="text" id="country" name="country"/><p style={{color:"red"}}>{this.state.emptyErrorCountry}</p></td>
                </tr>
            
                {/* <tr><td className={classes.cell1}></td>
                <td className={classes.cell2} style={{rowspan: "2", textAlign:"right"}}><Button>Add User</Button></td></tr> */}

                </table> 
                </div>
                <Accordion4 isOpen4={isOpen4} onChange={this.onChange4} label={"Add Additional Address"}>
              
              <div>
              <table>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="addresstype2" style={labelstyle}>Type of Address (Primary/Billing/Technical):</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input onChangeText={(text) => {this.setState({ typeofaddress2: text })}} style={textbxstyle2} type="text" id="addresstype2" name="addresstype2"/></td>
                </tr>


              <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="street2" style={labelstyle}>Street:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} onChangeText={(text) => {this.setState({ street2: text })}}type="text" id="street2" name="street2"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="city2" style={labelstyle}>City:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} onChangeText={(text) => {this.setState({ city2: text })}} type="text" id="city2" name="city2"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="state2" style={labelstyle}>State/Province:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} onChangeText={(text) => {this.setState({ statea2: text })}} type="text" id="state2" name="state2"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="zip2" style={labelstyle}>Zip Code:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input style={textbxstyle2} onChangeText={(text) => {this.setState({ zipcode2: text })}} type="text" id="zip2" name="zip2"/></td>
                </tr>

                <tr><td className={classes.cell3} style={{textAlign:"right"}}><label for="country2" style={labelstyle}>Country:</label></td>
                <td className={classes.cell4} style={{textAlign:"left"}}><input onChangeText={(text) => {this.setState({ country2: text })}} style={textbxstyle2} type="text" id="country2" name="country2"/></td>
                </tr>
            
                {/* <tr><td className={classes.cell1}></td>
                <td className={classes.cell2} style={{rowspan: "2", textAlign:"right"}}><Button>Add User</Button></td></tr> */}

                </table> 
                </div>
                </Accordion4>
                </Accordion>
                <Accordion2 isOpen2={isOpen2} onChange={this.onChange2} label={"Contact"}>
                <div>
                  <br/>
                <table>

                <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="contacttype" style={labelstyle}>Type of Contact (Primary/Billing/Technical):</label></td>
                <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input onBlur = {()=> this.ValidatorTofC()} onChangeText={(text) => {this.setState({ typeofcontact: text })}} style={textbxstyle} type="text" id="contacttype" name="contacttype"/><p style={{color:"red"}}>{this.state.emptyErrorTofC}</p></td>
                </tr>

            
                <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="fname" style={labelstyle}>First Name:</label></td>
                <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input onBlur = {()=> this.Validatorfname()} onChangeText={(text) => {this.setState({ fname: text })}} style={textbxstyle} type="text" id="fname" name="fname"/><p style={{color:"red"}}>{this.state.emptyErrorfname}</p></td>
                </tr>
            
                <tr ><td className={classes.cell1} style={{textAlign:"right"}}><label for="lname" style={labelstyle}>Last Name:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input onBlur = {()=> this.Validatorlname()} onChangeText={(text) => {this.setState({ lname: text })}} style={textbxstyle} type="text" id="lname" name="lname"/><p style={{color:"red"}}>{this.state.emptyErrorlname}</p></td>
                </tr>
               

                <tr ><td className={classes.cell1} style={{textAlign:"right"}}><label for="email" style={labelstyle}>Email:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input onBlur = {()=> this.Validatoremail()} onChangeText={(text) => {this.setState({ email: text })}} style={textbxstyle} type="text" id="email" name="email"/><p style={{color:"red"}}>{this.state.emptyErroremail}</p></td>
                </tr>
                

                <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="phone" style={labelstyle}>Phone:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input onBlur = {()=> this.Validatorphone()} onChangeText={(text) => {this.setState({ phone: text })}} style={textbxstyle} type="text" id="phone" name="phone"/><p style={{color:"red"}}>{this.state.emptyErrorphone}</p></td>
                </tr>
                

                {/* <tr><td className={classes.cell5} style={{textAlign:"center", paddingLeft: "0px", rowspan: "2" }}><Button>Edit User</Button></td>
                <td className={classes.cell6} style={{textAlign:"left", paddingLeft: "0px"}}><Button>Submit</Button></td>
                </tr> */}
                </table>
                </div>
                <Accordion5 isOpen5={isOpen5} onChange={this.onChange5} label={"Add Additional Contact"}>
                <div>
                <table>

                <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="contacttype2" style={labelstyle}>Type of Contact (Primary/Billing/Technical):</label></td>
                <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input onChangeText={(text) => {this.setState({ typeofcontact2: text })}} style={textbxstyle} type="text" id="contacttype2" name="contacttype2"/></td>
                </tr>

                <tr><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="fname2" style={labelstyle}>First Name:</label></td>
                <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input style={textbxstyle} onChangeText={(text) => {this.setState({ fname2: text })}} type="text" id="fname2" name="fname2"/></td>
                </tr>
            
                <tr ><td className={classes.cell1} style={{textAlign:"right"}}><label for="lname2" style={labelstyle}>Last Name:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} onChangeText={(text) => {this.setState({ lname2: text })}} type="text" id="lname2" name="lname2"/></td>
                </tr>

                <tr ><td className={classes.cell1} style={{textAlign:"right"}}><label for="email2" style={labelstyle}>Email:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input onChangeText={(text) => {this.setState({ email2: text })}} style={textbxstyle} type="text" id="email2" name="email2"/></td>
                </tr>

                <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="phone2" style={labelstyle}>Phone:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input onChangeText={(text) => {this.setState({ phone2: text })}} style={textbxstyle} type="text" id="phone2" name="phone2"/></td>
                </tr>

                {/* <tr><td className={classes.cell5} style={{textAlign:"center", paddingLeft: "0px", rowspan: "2" }}><Button>Edit User</Button></td>
                <td className={classes.cell6} style={{textAlign:"left", paddingLeft: "0px"}}><Button>Submit</Button></td>
                </tr> */}
                </table>
                </div>
                </Accordion5>
                </Accordion2>
                <Accordion3 isOpen3={isOpen3} onChange={this.onChange3} label={"Configuration Settings"}>
                <div>   
                  {/* <table>
                    <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="description" style={labelstyle}>Exam Description:</label></td>
                    <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input style={textbxstyle} type="text" id="description" name="description"/></td>
                    </tr>
                
                    <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="tds" style={labelstyle}>Test Delivery System (URL):</label></td>
                    <td className={classes.cell2} style={{textAlign:"left"}}><input style={textbxstyle} type="text" id="tds" name="tds"/></td>
                    </tr>
                  </table> */}
                  <table>
                    <tr><td className={classes.cell14} style={{textAlign:"right"}}><label for="Img Capture" style={labelstyle}>Image Capture Setting:</label></td>
                    <td className={classes.cell15} style={{textAlign: "right"}}><label style={labelstyle} style={{paddingBottom: "0", color: "#3cB650"}}>No</label><br/><label style={labelstyle} style={{paddingBottom:"0", color: "#3cB650"}}>Yes</label></td>
                    <td className={classes.cell16} style={{textAlign:"center"}}><RadioButton/></td>
                    </tr>
                  </table>
                  <table>
                  <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="frameInterval" style={labelstyle}>Frame Interval:</label></td>
                    <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input onChangeText={(text) => {this.setState({ frameinterval: text })}} style={textbxstyle} type="text" id="frameInterval" name="frameInterval"/></td>
                    </tr>
                
                    <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="anomalyDuration" style={labelstyle}>Anomaly Duration:</label></td>
                    <td className={classes.cell2} style={{textAlign:"left"}}><input onChangeText={(text) => {this.setState({ anomalyduration: text })}} style={textbxstyle} type="text" id="anomalyDuration" name="anomalyDuration"/></td>
                    </tr>

                    <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="smoothingFrame" style={labelstyle}>Smoothing Frame:</label></td>
                    <td className={classes.cell2} style={{textAlign:"left"}}><input onChangeText={(text) => {this.setState({ smoothingFrame: text })}} style={textbxstyle} type="text" id="smoothingFrame" name="smoothingFrame"/></td>
                    </tr>
                 </table>
                </div>
                </Accordion3>
                <div className={classes.flexChild}>
                  <table>
                  <tr>
                  <td className={classes.cell7} style={{textAlign:"right", paddingRight: "2%", paddingTop:"2%"}}><button onClick={this.Validatoremailrg} style={buttonstyle}>Edit</button></td>
                  <td className={classes.cell8} style={{textAlign:"left", paddingLeft: "2%", paddingTop:"2%"}}><button onClick={this.Validatoremailrg} style={buttonstyle}>Add</button></td>
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