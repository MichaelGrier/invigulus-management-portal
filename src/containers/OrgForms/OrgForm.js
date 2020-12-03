import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from '../../axios';

import classes from './OrgForm.module.css';
import RadioButton from '../../components/Form Inputs/RadioButton/RadioButton';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';
import Accordion from '../../components/Accordion/Accordion';
import Accordion2 from '../../components/Accordion/Accordion2';
import Accordion3 from '../../components/Accordion/Accordion3';
import Accordion4 from '../../components/Accordion/Accordion4';
import Accordion5 from '../../components/Accordion/Accodion5';

class OrgForm extends Component {
  constructor() {
    super();
    this.state = {
          description: '',
          id: '',
          //itemId: '',
          itemType: '',
          contact: null,
          address: null,

          configuration: null,

          }
    
    let RadioVal1 = null
    let RadioVal2 = null
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOrgIDChange = this.handleOrgIDChange.bind(this);
    // this.handleitemTypeChange = this.handleitemTypeChange.bind(this);
    // this.handleitemIDChange = this.handleitemIDChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleimgCapture = this.handleimgCapture.bind(this);
    this.handleConfigChange = this.handleConfigChange.bind(this);
    this.handleidCapture = this.handleidCapture.bind(this);
  }

  // whenever a change is made to an input field, update the corresponding state property
  handleNameChange(event) {
    this.setState({description: event.target.value});
  }

  handleOrgIDChange(event) {
    this.setState({id: event.target.value});
  }

  // handleitemTypeChange(event) {
  //   this.setState({itemType: event.target.value});
  // }

  // handleitemIDChange(event) {
  //   this.setState({itemId: event.target.value});
  // }

  handleAChange() {
    let typea = document.getElementById("addresstype")
    let streeta = document.getElementById("street")
    let citya = document.getElementById("city")
    let statea = document.getElementById("state")
    let zipa = document.getElementById("zip")
    let countrya = document.getElementById("country")
    let typea2 = document.getElementById("addresstype2")
    let streeta2 = document.getElementById("street2")
    let citya2 = document.getElementById("city2")
    let statea2 = document.getElementById("state2")
    let zipa2 = document.getElementById("zip2")
    let countrya2 = document.getElementById("country2")
    this.setState({
      address: 
      [{zip: zipa.value,
        country: countrya.value,
        state: statea.value,
        type: typea.value,
        city: citya.value,
        street: streeta.value },
      {
        zip: zipa2.value,
        country: countrya2.value,
        state: statea2.value,
        type: typea2.value,
        city: citya2.value,
        street: streeta2.value }]

      })
  }

  handleCChange() {
    let fnamec = document.getElementById("fname")
    let lnamec = document.getElementById("lname")
    let typec = document.getElementById("contacttype")
    let phonec = document.getElementById("phone")
    let emailc = document.getElementById("email")
    let fnamec2 = document.getElementById("fname2")
    let lnamec2 = document.getElementById("lname2")
    let typec2 = document.getElementById("contacttype2")
    let phonec2 = document.getElementById("phone2")
    let emailc2 = document.getElementById("email2")
    this.setState({ 
      contact: 
      [{firstName: fnamec.value,
        lastName: lnamec.value, 
        type: typec.value, 
        phone: phonec.value, 
        email: emailc.value},

        {
        firstName: fnamec2.value,
        lastName: lnamec2.value, 
        type: typec2.value, 
        phone: phonec2.value, 
        email: emailc2.value}]
      })
  }

  handleimgCapture() {
    let RadioimgNo = document.getElementById("imgCaptureNo")
    let RadioimgYes = document.getElementById("imgCaptureYes")

    if (RadioimgNo.checked) {
      this.RadioVal1 = "false"
    }
    if (RadioimgYes.checked) {
      this.RadioVal1 = "true"
    }
  }

  handleidCapture() {
    let RadioidNo = document.getElementById("idCaptureNo")
    let RadioidYes = document.getElementById("idCaptureYes")

    if (RadioidNo.checked) {
      this.RadioVal2 = "false"
    }
    if (RadioidYes.checked) {
      this.RadioVal2 = "true"
    }
  }

  handleConfigChange() {
    let smoothingf = document.getElementById("smoothingframe")
    let anomalyd = document.getElementById("anomalyduration")
    let framei = document.getElementById("frameinterval")
    this.setState({ 
      configuration: {
        Registration: {
          imageCapture: this.RadioVal1,
          idCapture: this.RadioVal2
        },
        postProcess: {
          anomalyDuration: anomalyd.value,
          smoothingFrame: smoothingf.value,
          frameInterval: framei.value,}
      }
    })
  }


  handleSubmit(event) {

    event.preventDefault();

    // prevent default submit action
    // distribute data stored in state into new object
    const formData = {
      description: this.state.description,
      id: this.state.id,
      contact: this.state.contact,
      address: this.state.address,
      configuration: this.state.configuration
    }
    console.log(formData);
    //make api call to post data
    axios.post(`/orgs`, formData)
         .then(res => {
          if (res.status === 200) {
            this.props.history.push('/add-test-confirmation')
           } 
         })
         // else, display error
         .catch(error => alert(error))   
  }
      state = {
      isOpen: true,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false, 
      isOpen5: false,
      };

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
          <Heading2>Add Organizations</Heading2>
          <form className={classes.wrapper} onSubmit={this.handleSubmit}>
            <fieldset>
              <div className={classes.flexChild}>
                <table>
                  <tr>
                    <td className={classes.cell3} 
                        style={{textAlign:"right"}}>
                        <label htmlFor="orgname" 
                          style={labelstyle}>
                          Name:
                       </label>
                    </td>
                    <td 
                      className={classes.cell4} 
                      style={{textAlign:"left"}}>
                      <input 
                        // onBlur = {()=> this.ValidatorN()} 
                        // onChangeText={(text) => {this.setState({ name: text })}} 
                        style={textbxstyle2} 
                        type="text" 
                        id="orgname" 
                        name="orgname"
                        value={this.state.description}
                        onChange={this.handleNameChange}
                        />
                      {/* <p 
                        style={{color:"red"}}>
                        {this.state.emptyErrorName}
                      </p> */}
                    </td>
                  </tr>
                  <tr>
                    <td 
                      className={classes.cell3} 
                      style={{textAlign:"right"}}>
                      <label 
                        htmlFor="orgID" 
                        style={labelstyle}>
                        ID:
                      </label>
                    </td>
                    <td 
                      className={classes.cell4} 
                      style={{textAlign:"left"}}>
                        <input 
                          // onChangeText={(text) => {this.setState({ ID: text })}} 
                          style={textbxstyle2} 
                          type="text" 
                          id="orgID" 
                          name="orgID"
                          value={this.state.id}
                          onChange={this.handleOrgIDChange}/>
                    </td>
                  </tr>
                  {/* <tr>
                    <td 
                      className={classes.cell3} 
                      style={{textAlign:"right"}}>
                      <label 
                        htmlFor="itemType" 
                        style={labelstyle}>
                        Item Type:
                      </label>
                    </td>
                    <td 
                      className={classes.cell4} 
                      style={{textAlign:"left"}}>
                        <input 
                          // onChangeText={(text) => {this.setState({ ID: text })}} 
                          style={textbxstyle2} 
                          type="text" 
                          id="itemType" 
                          name="itemType"
                          value={this.state.itemType}
                          onChange={this.handleitemTypeChange}/>
                    </td>
                  </tr> */}
                </table>
                  <hr></hr>
                    </div> 
                      <div> 
                      <Accordion isOpen={isOpen} onChange={this.onChange} label={"Address"}>
                          <br/>
                          <table>
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="addresstype" 
                                  style={labelstyle}>
                                  Type of Address (Primary/Billing/Technical):
                                </label>
                              </td>
                              <td 
                                className={classes.cell4}
                                style={{textAlign:"left"}}>
                                <input 
                                style={textbxstyle2} 
                                type="text" 
                                id="addresstype" 
                                name="addresstype"
                                //onChange={this.handleAChange}
                                />
                                {/* <p style={{color:"red"}}>
                                  {this.state.emptyErrorTofA}
                                </p> */}
                              </td>
                            </tr>
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="street" 
                                  style={labelstyle}>
                                  Street:
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                  style={textbxstyle2} 
                                  type="text" 
                                  id="street" 
                                  name="street"
                                  //onChange={this.handleAChange}
                                  />
                                {/* <p 
                                  style={{color:"red"}}>
                                  {this.state.emptyErrorStreet}
                                </p> */}
                              </td>
                            </tr>
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="city" 
                                  style={labelstyle}>
                                  City:
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                  style={textbxstyle2} 
                                  type="text" 
                                  id="city" 
                                  name="city"
                                  //value={this.state.address.city}
                                  //onChange={this.handleAChange}
                                  />
                                  {/* <p style={{color:"red"}}>
                                    {this.state.emptyErrorCity}
                                </p> */}
                              </td>
                            </tr>
                            <tr> 
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="state" 
                                  style={labelstyle}>
                                  State/Province:
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                  style={textbxstyle2} 
                                  type="text" 
                                  id="state" 
                                  name="state"
                                  // value={this.state.address.state}
                                  //onChange={this.handleAChange}
                                  />
                                {/* <p style={{color:"red"}}>
                                  {this.state.emptyErrorState}
                                </p> */}
                              </td>
                            </tr>
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="zip" 
                                  style={labelstyle}>
                                  Zip Code:
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                  // onBlur = {()=> this.ValidatorZC()} 
                                  style={textbxstyle2} 
                                  // onChangeText={(text) => {this.setState({ zipcode: text })}} 
                                  type="text" 
                                  id="zip" 
                                  name="zip"
                                  // value={this.state.address.zip}
                                  //onChange={this.handleAChange}
                                  />
                                {/* <p style={{color:"red"}}>
                                  {this.state.emptyErrorZipcode}
                                </p> */}
                              </td>
                            </tr>
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                htmlFor="country" 
                                style={labelstyle}>
                                  Country:
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                // onBlur = {()=> this.ValidatorCountry()} 
                                style={textbxstyle2} 
                                // onChangeText={(text) => {this.setState({ country: text })}}
                                type="text" 
                                id="country" 
                                name="country"
                                // value={this.state.address.country}
                                //onChange={this.handleAChange}
                                />
                                {/* <p style={{color:"red"}}>
                                  {this.state.emptyErrorCountry}
                                </p> */}
                              </td>
                            </tr>
                          </table>
                          </Accordion>
                        </div>
                        <div> 
                        <Accordion4 isOpen4={isOpen4} onChange={this.onChange4} label={"Add Additional Address"}>
                          <table>
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="addresstype2" 
                                  style={labelstyle}>
                                  Type of Address (Primary/Billing/Technical):
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                  // onChangeText={(text) => {this.setState({ typeofaddress2: text })}} 
                                  style={textbxstyle2} 
                                  type="text" 
                                  id="addresstype2" 
                                  name="addresstype2"
                                  />
                              </td>
                            </tr>
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="street2" 
                                  style={labelstyle}>
                                  Street:
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                  style={textbxstyle2} 
                                  // onChangeText={(text) => {this.setState({ street2: text })}}
                                  type="text" 
                                  id="street2" 
                                  name="street2"
                                  />
                              </td>
                            </tr>
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="city2" 
                                  style={labelstyle}>
                                  City:
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                  style={textbxstyle2} 
                                  // onChangeText={(text) => {this.setState({ city2: text })}} 
                                  type="text" 
                                  id="city2" 
                                  name="city2"
                                  />
                              </td>
                            </tr>
                            <tr>
                              <td className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="state2" 
                                  style={labelstyle}>
                                  State/Province:
                                </label>
                              </td>
                              <td 
                              className={classes.cell4} 
                              style={{textAlign:"left"}}>
                              <input 
                                style={textbxstyle2} 
                                //onChangeText={(text) => {this.setState({ statea2: text })}} 
                                type="text" 
                                id="state2" 
                                name="state2"
                                />
                              </td>
                            </tr>                            
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="zip2" 
                                  style={labelstyle}>
                                  Zip Code:
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                  style={textbxstyle2} 
                                  // onChangeText={(text) => {this.setState({ zipcode2: text })}} 
                                  type="text" 
                                  id="zip2" 
                                  name="zip2"
                                  />
                              </td>
                            </tr>
                            <tr>
                              <td 
                                className={classes.cell3} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="country2" 
                                  style={labelstyle}>
                                  Country:
                                </label>
                              </td>
                              <td 
                                className={classes.cell4} 
                                style={{textAlign:"left"}}>
                                <input 
                                  // onChangeText={(text) => {this.setState({ country2: text })}} 
                                  style={textbxstyle2} 
                                  type="text" 
                                  id="country2" 
                                  name="country2"
                                  //onChange={this.handleAChange}
                                  />
                              </td>
                            </tr>
                          </table>
                      </Accordion4>
                      </div>                     
                      <div>
                      <Accordion2 isOpen2={isOpen2} onChange={this.onChange2} label={"Contact"}>
                          <br/>
                            <table>
                              <tr>
                                <td 
                                  id={classes.cell1}  
                                  style={{textAlign:"right"}}>
                                  <label 
                                    htmlFor="contacttype" 
                                    style={labelstyle}>
                                    Type of Contact (Primary/Billing/Technical):
                                  </label>
                                </td>
                                <td 
                                  className={classes.cell2} 
                                  style={{textAlign:"left", width:"30%"}}>
                                  <input 
                                    // onBlur = {()=> this.ValidatorTofC()} 
                                    style={textbxstyle} 
                                    type="text" 
                                    id="contacttype" 
                                    name="contacttype"
                                    //onChange={this.handleCChange}
                                    />
                                    {/* <p 
                                      style={{color:"red"}}>
                                      {this.state.emptyErrorTofC}
                                    </p> */}
                                </td>
                              </tr>           
                              <tr>
                                <td 
                                  id={classes.cell1}  
                                  style={{textAlign:"right"}}>
                                  <label 
                                    htmlFor="fname" 
                                    style={labelstyle}>
                                    First Name:
                                  </label>
                                </td>
                                <td 
                                  className={classes.cell2} 
                                  style={{textAlign:"left", width:"30%"}}>
                                  <input 
                                    // onBlur = {()=> this.Validatorfname()} 
                                    style={textbxstyle}
                                    type="text" 
                                    id="fname" 
                                    name="fname"
                                    //onChange={this.handleCChange}
                                   />
                                    {/* <p 
                                      style={{color:"red"}}>
                                      {this.state.emptyErrorfname}
                                    </p> */}
                                </td>
                              </tr>
                              <tr>
                                <td 
                                  className={classes.cell1} 
                                  style={{textAlign:"right"}}>
                                  <label 
                                    htmlFor="lname" 
                                    style={labelstyle}>
                                    Last Name:
                                  </label>
                                </td>
                                <td 
                                  className={classes.cell2} 
                                  style={{textAlign:"left"}}>
                                  <input 
                                    // onBlur = {()=> this.Validatorlname()} 
                                    style={textbxstyle} 
                                    type="text" 
                                    id="lname" 
                                    name="lname"
                                    //onChange={this.handleCChange}
                                    />
                                  {/* <p 
                                    style={{color:"red"}}>
                                    {this.state.emptyErrorlname}
                                  </p> */}
                                </td>
                              </tr>               
                              <tr>
                                <td 
                                  className={classes.cell1} 
                                  style={{textAlign:"right"}}>
                                    <label 
                                      htmlFor="email" 
                                      style={labelstyle}>
                                      Email:
                                    </label>
                                </td>
                                <td 
                                  className={classes.cell2} 
                                  style={{textAlign:"left"}}>
                                  <input 
                                    // onBlur = {()=> this.Validatoremail()} 
                                    style={textbxstyle} 
                                    type="text" 
                                    id="email" 
                                    name="email"
                                    //onChange={this.handleCChange}
                                    />
                                  {/* <p 
                                    style={{color:"red"}}>
                                    {this.state.emptyErroremail}
                                  </p> */}
                                </td>
                              </tr>                
                              <tr>
                                <td 
                                  className={classes.cell1} 
                                  style={{textAlign:"right"}}>
                                  <label 
                                    htmlFor="phone" 
                                    style={labelstyle}>
                                    Phone:
                                  </label>
                                </td>
                                <td 
                                  className={classes.cell2} 
                                  style={{textAlign:"left"}}>
                                  <input 
                                    // onBlur = {()=> this.Validatorphone()} 
                                    // onChangeText={(text) => {this.setState({ phone: text })}} 
                                    style={textbxstyle} 
                                    type="text" 
                                    id="phone" 
                                    name="phone"
                                    //onChange={this.handleCChange}
                                    />
                                  {/* <p style={{color:"red"}}>
                                    {this.state.emptyErrorphone}
                                  </p> */}
                                </td>
                              </tr>
                            </table>
                            </Accordion2>
                          </div>
                          <div>
                        <Accordion5 isOpen5={isOpen5} onChange={this.onChange5} label={"Add Additional Contact"}>
                          <table>
                            <tr>
                              <td 
                                id={classes.cell1} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="contacttype2" 
                                  style={labelstyle}>
                                  Type of Contact (Primary/Billing/Technical):
                                </label>
                              </td>
                              <td 
                                className={classes.cell2} 
                                style={{textAlign:"left", width:"30%"}}>
                                <input 
                                  // onChangeText={(text) => {this.setState({ typeofcontact2: text })}} 
                                  style={textbxstyle} 
                                  type="text" 
                                  id="contacttype2" 
                                  name="contacttype2"
                                  />
                              </td>
                            </tr>
                            <tr>
                              <td 
                                id={classes.cell1} 
                                style={{textAlign:"right"}}>
                                <label 
                                  for="fname2" 
                                  style={labelstyle}>
                                  First Name:
                                </label>
                              </td>
                              <td 
                                className={classes.cell2} 
                                style={{textAlign:"left", width:"30%"}}>
                                <input 
                                  style={textbxstyle} 
                                  // onChangeText={(text) => {this.setState({ fname2: text })}} 
                                  type="text" 
                                  id="fname2" 
                                  name="fname2"
                                  />
                              </td>
                            </tr>            
                            <tr>
                              <td 
                                className={classes.cell1} 
                                style={{textAlign:"right"}}>
                                <label 
                                  for="lname2" 
                                  style={labelstyle}>
                                  Last Name:
                                </label>
                              </td>
                              <td 
                                className={classes.cell2} 
                                style={{textAlign:"left"}}>
                                <input 
                                  style={textbxstyle} 
                                  // onChangeText={(text) => {this.setState({ lname2: text })}} 
                                  type="text" 
                                  id="lname2" 
                                  name="lname2"
                                  />
                              </td>
                            </tr>
                            <tr>
                              <td 
                                className={classes.cell1} 
                                style={{textAlign:"right"}}>
                                <label htmlFor="email2" 
                                  style={labelstyle}>
                                  Email:
                                </label>
                              </td>
                              <td 
                                className={classes.cell2} 
                                style={{textAlign:"left"}}>
                                <input 
                                  // onChangeText={(text) => {this.setState({ email2: text })}} 
                                  style={textbxstyle} 
                                  type="text" 
                                  id="email2" 
                                  name="email2"
                                  />
                              </td>
                            </tr>
                            <tr>
                              <td 
                                className={classes.cell1} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="phone2" 
                                  style={labelstyle}>
                                  Phone:
                                </label>
                              </td>
                              <td 
                                className={classes.cell2} 
                                style={{textAlign:"left"}}>
                                <input 
                                  // onChangeText={(text) => {this.setState({ phone2: text })}} 
                                  style={textbxstyle} 
                                  type="text" 
                                  id="phone2" 
                                  name="phone2"
                                  //onChange={this.handleCChange}
                                  />
                              </td>
                            </tr>
                          </table>
                      </Accordion5>
                      </div>
                      <Accordion3 isOpen3={isOpen3} onChange={this.onChange3} label={"Configuration Settings"}>
                        <div>  
                          <table>
                            <tr>
                              <td 
                                className={classes.cell14} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="ImgCapture" 
                                  style={labelstyle}>
                                  Image Capture Setting:
                                </label>
                              </td>
                              <td 
                                className={classes.cell15} 
                                style={{textAlign: "right"}}>
                                <label 
                                  style={labelstyle} 
                                  style={{paddingBottom: "0", color: "#3cB650"}}>
                                  No
                                </label>
                                  <br/>
                                <label 
                                  style={labelstyle} 
                                  style={{paddingBottom:"0", color: "#3cB650"}}>
                                  Yes
                                </label>
                              </td>
                              <td 
                                className={classes.cell16} 
                                style={{textAlign:"center"}}>
                                <div>
                                  <label 
                                    id="labelr" 
                                    className={classes.RadioButton}>
                                    <input type="radio" 
                                      name="imgCaptureNo" 
                                      id="imgCaptureNo"
                                      value="false"
                                      onChange={this.handleimgCapture}  
                                       />
                                    <span 
                                      className={classes.checkmark}>
                                    </span>
                                  </label>
                                    <label 
                                      id="labelr" 
                                      className={classes.RadioButton}>
                                    <input 
                                      type="radio" 
                                      name="imgCaptureYes" 
                                      id="imgCaptureYes" 
                                      value="true"
                                      onChange={this.handleimgCapture}
                                      />                                  
                                    <span 
                                      className={classes.checkmark}>  
                                    </span>
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table>
                            <tr>
                              <td 
                                className={classes.cell14} 
                                style={{textAlign:"right"}}>
                                <label 
                                  htmlFor="idCapture" 
                                  style={labelstyle}>
                                  ID Capture Setting:
                                </label>
                              </td>
                              <td 
                                className={classes.cell15} 
                                style={{textAlign: "right"}}>
                                <label 
                                  style={labelstyle} 
                                  style={{paddingBottom: "0", color: "#3cB650"}}>
                                  No
                                </label>
                                  <br/>
                                <label 
                                  style={labelstyle} 
                                  style={{paddingBottom:"0", color: "#3cB650"}}>
                                  Yes
                                </label>
                              </td>
                              <td 
                                className={classes.cell16} 
                                style={{textAlign:"center"}}>
                                <div>
                                  <label 
                                    id="labelr" 
                                    className={classes.RadioButton}>
                                    <input type="radio" 
                                      name="idCaptureNo" 
                                      id="idCaptureNo"
                                      value="false"
                                      onChange={this.handleidCapture}  
                                       />
                                    <span 
                                      className={classes.checkmark}>
                                    </span>
                                  </label>
                                    <label 
                                      id="labelr" 
                                      className={classes.RadioButton}>
                                    <input 
                                      type="radio" 
                                      name="idCaptureYes" 
                                      id="idCaptureYes" 
                                      value="true"
                                      onChange={this.handleidCapture}
                                      />                                  
                                    <span 
                                      className={classes.checkmark}>  
                                    </span>
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table>
                          <tr>
                            <td 
                              id={classes.cell1}  
                              style={{textAlign:"right"}}>
                              <label 
                                htmlFor="frameInterval" 
                                style={labelstyle}>
                                Frame Interval:
                              </label>
                            </td>
                            <td 
                              className={classes.cell2} 
                              style={{textAlign:"left", width:"30%"}}>
                              <input 
                                // onChangeText={(text) => {this.setState({ frameinterval: text })}} 
                                style={textbxstyle} 
                                type="text" 
                                id="frameinterval" 
                                name="frameinterval"
                                // value={this.state.frameInterval}
                                //onChange={this.handleConfigChange}
                                />
                            </td>
                          </tr>
                          <tr>
                            <td 
                              className={classes.cell1} 
                              style={{textAlign:"right"}}>
                              <label 
                                htmlFor="anomalyDuration" 
                                style={labelstyle}>
                                Anomaly Duration:
                              </label>
                            </td>
                            <td 
                              className={classes.cell2} 
                              style={{textAlign:"left"}}>
                              <input 
                                // onChangeText={(text) => {this.setState({ anomalyduration: text })}} 
                                style={textbxstyle} 
                                type="text" 
                                id="anomalyduration" 
                                name="anomalyduration"
                                // value={this.state.anomalyDuration}
                                //onChange={this.handleConfigChange}
                                />
                            </td>
                          </tr>
                          <tr>
                            <td 
                              className={classes.cell1} 
                              style={{textAlign:"right"}}>
                              <label 
                                htmlFor="smoothingFrame" 
                                style={labelstyle}>
                                Smoothing Frame:
                              </label>
                            </td>
                            <td 
                              className={classes.cell2} 
                              style={{textAlign:"left"}}>
                              <input 
                                // onChangeText={(text) => {this.setState({ smoothingFrame: text })}} 
                                style={textbxstyle} 
                                type="text" 
                                id="smoothingframe" 
                                name="smoothingframe"
                                // value={this.state.smoothingFrame}
                                //onChange={this.handleConfigChange}
                                />
                            </td>
                          </tr>
                          </table>
                        </div>
                      </Accordion3>
                        <div className={classes.flexChild}>
                          <table>
                            <tr>
                              <td 
                                className={classes.cell7} 
                                style={{textAlign:"right", paddingRight: "2%", paddingTop:"2%"}}>
                                <input 
                                  onClick={() => {this.handleAChange();
                                  this.handleCChange();
                                  this.handleConfigChange();}}
                                  type="submit" value="Submit" 
                                  style={buttonstyle}/>
                              </td>
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

export default withRouter(OrgForm);

// ValidatorN() {

//   if (this.state.name === "")
//   {
//     this.setState ({emptyErrorName: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorName: ""})
//   }
// }
// ValidatorTofA() {
//   if (this.state.typeofaddress === "" )
//   {
//     this.setState ({emptyErrorTofA: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorTofA: ""})
//   }
// }
// ValidatorStr() {
//   if (this.state.street === "")
//   {
//     this.setState ({emptyErrorStreet: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorStreet: ""})
//   }
// }
// ValidatorCit() {
//   if (this.state.city === "" )
//   {
//     this.setState ({emptyErrorCity: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorCity: ""})
//   }
// }

// ValidatorSt() {
//   if (this.state.statea === "")
//   {
//     this.setState ({emptyErrorState: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorState: ""})
//   }
// }
// ValidatorZC() {
//   if (this.state.zipcode === "")
//   {
//     this.setState ({emptyErrorZipcode: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorZipcode: ""})
//   }
// }
// ValidatorCountry() {
//   if (this.state.country === "")
//   {
//     this.setState ({emptyErrorCountry: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorCountry: ""})
//   }
// }
// ValidatorTofC () {
//   if (this.state.typeofcontact === "" )
//   {
//     this.setState ({emptyErrorTofC: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorTofC: ""})
//   }
// }
// Validatorfname() {
//   if (this.state.fname === "")
//   {
//     this.setState ({emptyErrorfname: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorfname: ""})
//   }
// }
// Validatorlname() {
//   if (this.state.lname === "" )
//   {
//     this.setState ({emptyErrorlname: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorlname: ""})
//   }
// }
// Validatorphone() {
//   if (this.state.phone === "")
//   {
//     this.setState ({emptyErrorphone: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErrorphone: ""})
//   }
// }
// Validatoremail() {
//   if (this.state.email === "")
//   {
//     this.setState ({emptyErroremail: "This field cannot be empty"})
//   }
//   else 
//   {
//     this.setState ({emptyErroremail: ""})
//   }
// }
// Validatoremailrg() {
// let rg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// let isValid= rg.test(this.state.email)
// if (isValid)
// {
//   this.setState ({emailError: "The email address entered has an incorrect format"})
//   alert("The email address entered has an incorrect format")
// }
// else 
// {
//   this.setState ({emailError: ""})
// }
// }