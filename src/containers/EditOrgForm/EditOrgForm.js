import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import classes from './EditOrgForm.module.css';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';
import Accordion from '../../components/Accordion/Accordion';
import Accordion2 from '../../components/Accordion/Accordion2';
import Accordion3 from '../../components/Accordion/Accordion3';
import Accordion4 from '../../components/Accordion/Accordion4';
import Accordion5 from '../../components/Accordion/Accodion5';

class EditOrgForm extends Component {
  constructor() {
    super();
    this.state = {
        data: {
          description: "",
          id: ""},
          contact:
          [{
            firstName: "" ,
            lastName: "" , 
            typea: "", 
            phone: "", 
            email: "",
            type: "",
          }],
          contact2:
          {
            firstName2: "" ,
            lastName2: "" , 
            typea2: "", 
            phone2: "", 
            email2: "",
          },
        address:
        [{
          zip: "",
          country: "",
          state: "",
          typec: "",
          city: "",
          street: "",
          type:"",
        }],
        address2:
        {
          zip2: "",
          country2: "",
          state2: "",
          typec2: "",
          city2: "",
          street2: "",
        },
      configuration: {
        Registration: {
          imageCapture: "",
          idCapture: "",
        },
        postProcess: {
          anomalyDuration: "",
          smoothingFrame: "",
          frameInterval: ""}
      }
    }
    
    let RadioVal1 = null
    let RadioVal2 = null
    let imgCapVal = null
    let idCapVal = null

    this.handleNameChange = this.handleNameChange.bind(this);
    //this.handleOrgIDChange = this.handleOrgIDChange.bind(this);
    // this.handleitemTypeChange = this.handleitemTypeChange.bind(this);
    // this.handleitemIDChange = this.handleitemIDChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleimgCapture = this.handleimgCapture.bind(this);
    this.handleConfigChange = this.handleConfigChange.bind(this);
    this.handleidCapture = this.handleidCapture.bind(this);
    this.orgnameVal = this.orgnameVal.bind(this);
    this.orgidVal = this.orgidVal.bind(this);
    this.addresstypeVal = this.addresstypeVal.bind(this);
    this.streetVal = this.streetVal.bind(this);
    this.cityVal = this.cityVal.bind(this);
    this.zipVal = this.zipVal.bind(this);
    this.stateVal = this.stateVal.bind(this);
    this.countryVal = this.countryVal.bind(this);
    this.contacttypeVal = this.contacttypeVal.bind(this);
    this.fnameVal = this.fnameVal.bind(this);
    this.lnameVal = this.lnameVal.bind(this);
    this.phoneVal = this.phoneVal.bind(this);
    this.emailVal = this.emailVal.bind(this);
    this.imgcaptureVal = this.imgcaptureVal.bind(this);
    this.idcaptureVal = this.idcaptureVal.bind(this);
    this.smoothingframeVal = this.smoothingframeVal.bind(this);
    this.anomalydurationVal = this.anomalydurationVal.bind(this);
    this.frameintervalVal = this.frameintervalVal.bind(this);
    this.stateUpdate = this.stateUpdate.bind(this);
    // this.handleGetid = this.handleGetid.bind(this);
    // this.handleGetimg = this.handleGetimg.bind(this);
    // this.handleRadiobtnsGet = this.handleRadiobtnsGet(this);
    this.handletofaChange = this.handletofaChange.bind(this);
    this.handletofcChange = this.handletofcChange.bind(this);
    this.handletofa2Change = this.handletofa2Change.bind(this);
    this.handletofc2Change = this.handletofc2Change.bind(this);
    this.handlecityChange = this.handlecityChange.bind(this);
    this.handlecity2Change = this.handlecity2Change.bind(this);
    this.handlestreetChange = this.handlestreetChange.bind(this);
    this.handlestreet2Change = this.handlestreet2Change.bind(this);
    this.handlecountryChange = this.handlecountryChange.bind(this);
    this.handlecountry2Change = this.handlecountry2Change.bind(this);
    this.handlestateChange = this.handlestateChange.bind(this);
    this.handlestate2Change = this.handlestate2Change.bind(this);
    this.handlezipChange = this.handlezipChange.bind(this);
    this.handlezip2Change = this.handlezip2Change.bind(this);
    this.handlefnameChange = this.handlefnameChange.bind(this);
    this.handlefname2Change = this.handlefname2Change.bind(this);
    this.handlelnameChange = this.handlelnameChange.bind(this);
    this.handlelname2Change = this.handlelname2Change.bind(this);
    this.handlephoneChange = this.handlephoneChange.bind(this);
    this.handlephone2Change = this.handlephone2Change.bind(this);
    this.handleemailChange = this.handleemailChange.bind(this);
    this.handleemail2Change = this.handleemail2Change.bind(this);
    this.handlesmoothfChange = this.handlesmoothfChange.bind(this);
    this.handleframeiChange = this.handleframeiChange.bind(this);
    this.handleanomdChange = this.handleanomdChange.bind(this);
  }

  // whenever a change is made to an input field, update the corresponding state property
  handleNameChange(event) {
    let data = {...this.state.data}
    data.description = event.target.value
    this.setState({data});
  }

  handleOrgIDChange(event) {
    let data = {...this.state.data}
    data.id = event.target.value
    this.setState({data});
  }

  handletofaChange(event) {
    let address = {...this.state.address}
    address.typea = event.target.value
    this.setState({address});
  }

  handlecityChange(event) {
    let address = {...this.state.address}
    address.city = event.target.value
    this.setState({address});
  }

  handlestreetChange(event) {
    let address = {...this.state.address}
    address.street = event.target.value
    this.setState({address});
  }

  handlecountryChange(event) {
    let address = {...this.state.address}
    address.country = event.target.value
    this.setState({address});
  }

  handlestateChange(event) {
    let address = {...this.state.address}
    address.state = event.target.value
    this.setState({address});
  }

  handlezipChange(event) {
    let address = {...this.state.address}
    address.zip = event.target.value
    this.setState({address});
  }

  handletofa2Change(event) {
    let address2 = {...this.state.address2}
    address2.typea2 = event.target.value
    this.setState({address2});
  }

  handlecity2Change(event) {
    let address2 = {...this.state.address2}
    address2.city2 = event.target.value
    this.setState({address2});
  }

  handlestreet2Change(event) {
    let address2 = {...this.state.address2}
    address2.street2 = event.target.value
    this.setState({address2});
  }

  handlecountry2Change(event) {
    let address2 = {...this.state.address2}
    address2.country2 = event.target.value
    this.setState({address2});
  }

  handlestate2Change(event) {
    let address2 = {...this.state.address2}
    address2.state2 = event.target.value
    this.setState({address2});
  }

  handlezip2Change(event) {
    let address2 = {...this.state.address2}
    address2.zip2 = event.target.value
    this.setState({address2});
  }

  handletofcChange(event) {
    let contact = {...this.state.contact}
    contact.typec = event.target.value
    this.setState({contact});
  }

  handlefnameChange(event) {
    let contact = {...this.state.contact}
    contact.firstName = event.target.value
    this.setState({contact});
  }

  handlelnameChange(event) {
    let contact = {...this.state.contact}
    contact.lastName = event.target.value
    this.setState({contact});
  }

  handlephoneChange(event) {
    let contact = {...this.state.contact}
    contact.phone = event.target.value
    this.setState({contact});
  }

  handleemailChange(event) {
    let contact = {...this.state.contact}
    contact.email = event.target.value
    this.setState({contact});
  }

  handletofc2Change(event) {
    let contact2 = {...this.state.contact2}
    contact2.typec2 = event.target.value
    this.setState({contact2});
  }

  handlefname2Change(event) {
    let contact2 = {...this.state.contact2}
    contact2.firstName2 = event.target.value
    this.setState({contact2});
  }

  handlelname2Change(event) {
    let contact2 = {...this.state.contact2}
    contact2.lastName2 = event.target.value
    this.setState({contact2});
  }

  handlephone2Change(event) {
    let contact2 = {...this.state.contact2}
    contact2.phone2 = event.target.value
    this.setState({contact2});
  }

  handleemail2Change(event) {
    let contact2 = {...this.state.contact2}
    contact2.email2 = event.target.value
    this.setState({contact2});
  }

  handleframeiChange(event) {
    let configuration = {...this.state.configuration}
    configuration.frameInterval = event.target.value
    this.setState({configuration});
  }

  handleanomdChange(event) {
    let configuration = {...this.state.configuration}
    configuration.anomalyDuration = event.target.value
    this.setState({configuration});
  }

  handlesmoothfChange(event) {
    let configuration = {...this.state.configuration}
    configuration.smoothingFrame = event.target.value
    this.setState({configuration});
  }

//   handleDescriptionChange(event) {
//     let data = {...this.state.data};
//     data.description = event.target.value
//     this.setState({data});
//   }

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
    let address = {...this.state.address};
    address = 
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
        
    this.setState({address});  
    
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
    let contact = {...this.state.contact}
    contact = [{firstName: fnamec.value,
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
    
    this.setState({contact}); 
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
  handleGetid(){
    let RadioidNo = document.getElementById("idCaptureNo")
    let RadioidYes = document.getElementById("idCaptureYes")

    if (this.state.idCapture === "true") {
        RadioidYes.checked = true
    }
    if (this.state.idCapture === "false") {
      RadioidNo.checked = true
    }
  }

  handleGetimg() {
    let RadioimgNo = document.getElementById("imgCaptureNo")
    let RadioimgYes = document.getElementById("imgCaptureYes")
    if (this.state.imageCapture === "true") {
      RadioimgYes.checked = true
    }

    if (this.state.imageCapture === "false") {
      RadioimgNo.checked = true
    }
  }

  handleConfigChange() {
    let smoothingf = document.getElementById("smoothingframe")
    let anomalyd = document.getElementById("anomalyduration")
    let framei = document.getElementById("frameinterval")
    let configuration = {...this.state.configuration}
 
    configuration = {
        Registration: {
          imageCapture: this.RadioVal1,
          idCapture: this.RadioVal2
        },
        postProcess: {
          anomalyDuration: anomalyd.value,
          smoothingFrame: smoothingf.value,
          frameInterval: framei.value,}
      }
    this.setState({configuration}); 

    }
  
    stateUpdate() {
      this.handleCChange();
      this.handleAChange();
      this.handleidCapture();
      this.handleimgCapture();
      this.handleConfigChange();
      this.idcaptureVal();
      this.imgcaptureVal();
    }

  orgnameVal(event) {
    if (event.target.value === ""){
      document.getElementById("orgnameErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("orgnameErrMsg").innerHTML=""
      }
  }

  orgidVal(event) {
    if (event.target.value === ""){
      document.getElementById("orgidErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("orgidErrMsg").innerHTML=""
      }
  }

  addresstypeVal(event) {
    if (event.target.value === ""){
      document.getElementById("addresstypeErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("addresstypeErrMsg").innerHTML=""
      }
  }

  streetVal(event) {
    if (event.target.value === ""){
      document.getElementById("streetErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("streetErrMsg").innerHTML=""
      }
  }

  zipVal(event) {
    if (event.target.value === ""){
      document.getElementById("zipErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("zipErrMsg").innerHTML=""
      }
  }

  cityVal(event) {
    if (event.target.value === ""){
      document.getElementById("cityErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("cityErrMsg").innerHTML=""
      }
  }

  stateVal(event) {
    if (event.target.value === ""){
      document.getElementById("stateErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("stateErrMsg").innerHTML=""
      }
  }

  countryVal(event) {
    if (event.target.value === ""){
      document.getElementById("countryErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("countryErrMsg").innerHTML=""
      }
  }

  contacttypeVal(event) {
    if (event.target.value === ""){
      document.getElementById("contacttypeErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("contacttypeErrMsg").innerHTML=""
      }
  }

  fnameVal(event) {
    if (event.target.value === ""){
      document.getElementById("fnameErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("fnameErrMsg").innerHTML=""
      }
  }

  lnameVal(event) {
    if (event.target.value === ""){
      document.getElementById("lnameErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("lnameErrMsg").innerHTML=""
      }
  }

  phoneVal(event) {
    if (event.target.value === ""){
      document.getElementById("phoneErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("phoneErrMsg").innerHTML=""
      }
  }

  emailVal(event) {
    let emailv = document.getElementById("email")
    let rg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid= rg.test(emailv.value)
    
    if (event.target.value === ""){
      document.getElementById("emailErrMsg").innerHTML="Required"
      }
    else if (!isValid) {
        document.getElementById("emailErrMsg").innerHTML="The email entered is not valid"
      }
    else {
        document.getElementById("emailErrMsg").innerHTML=""
      }
  }

  idcaptureVal() {
    let RadioidNo = document.getElementById("idCaptureNo")
    let RadioidYes = document.getElementById("idCaptureYes")
    if (!RadioidNo.checked && !RadioidYes.checked){
      //document.getElementById("imgcaptureErrMsg").innerHTML="Required"
      this.idCapVal = false
      }
      else{
      //document.getElementById("imgcaptureErrMsg").innerHTML=""
      this.idCapVal = true
      }
  }

  imgcaptureVal() {
    let RadioimgNo = document.getElementById("imgCaptureNo")
    let RadioimgYes = document.getElementById("imgCaptureYes")
    if (!RadioimgNo.checked && !RadioimgYes.checked){
      //document.getElementById("imgcaptureErrMsg").innerHTML="Required"
      this.imgCapVal = false
      }
      else{
      //document.getElementById("imgcaptureErrMsg").innerHTML=""
      this.imgCapVal = true
      }
  }

  frameintervalVal(event) {
    if (event.target.value === ""){
      document.getElementById("frameintervalErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("frameintervalErrMsg").innerHTML=""
      }
  }

  anomalydurationVal(event) {
    if (event.target.value === ""){
      document.getElementById("anomalydurationErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("anomalydurationErrMsg").innerHTML=""
      }
  }

  smoothingframeVal(event) {
    if (event.target.value === ""){
      document.getElementById("smoothingframeErrMsg").innerHTML="Required"
      }
      else{
      document.getElementById("smoothingframeErrMsg").innerHTML=""
      }
  }

  componentDidMount() {
      // parse query from URL string to retrieve orgId
      const query = new URLSearchParams(this.props.location.search);
      const orgid = {};
      for (let param of query.entries()) {
        orgid[param[0]] = param[1];
      }
      console.log(orgid)
  
      //convert orgId to string.
      const preProcessedItemId = orgid.id
      console.log(orgid.id)
      const processedItemId = preProcessedItemId.toString();
      //const processeditemId = stringToSlice.slice(4);

      console.log(preProcessedItemId)
      console.log(processedItemId)
  
      // get org information by orgID
      axios.get(`/orgs/${processedItemId}`).then(res => {
        console.log(res.data.result.Items);
        const pathToData = res.data.result.Items;
        const basicData = [];
        const addressData = [];
        const address2Data = [];
        const contactData = [];
        const contact2Data = [];
        //const basic1Data = [];
        //const regisData = [];
        //const pprocessData = [];
        const configData = [];
        // push data objects into an array
        for (const dataItem in pathToData) {
          basicData.push({
          description: pathToData[dataItem].description,
          id: pathToData[dataItem].id,
          itemId: pathToData[dataItem].itemId,
          itemType: pathToData[dataItem].itemType,
          }) }

          // for (const data1Item in pathToData) {
          // basic1Data.push({
          //   id: pathToData[data1Item].id,
          //   itemId: pathToData[data1Item].itemId,
          //   itemType: pathToData[data1Item].itemType,
          // }) }

          for (const addressItem in pathToData) {
          addressData.push({
          city: pathToData[addressItem].address[0].city,
          country: pathToData[addressItem].address[0].country,
          zip: pathToData[addressItem].address[0].zip,
          street: pathToData[addressItem].address[0].street,
          typea: pathToData[addressItem].address[0].type,
          state: pathToData[addressItem].address[0].state,
          // city2: pathToData[addressItem].address[1].city,
          // country2: pathToData[addressItem].address[1].country,
          // zip2: pathToData[addressItem].address[1].zip,
          // street2: pathToData[addressItem].address[1].street,
          // typea2: pathToData[addressItem].address[1].type,
          // state2: pathToData[addressItem].address[1].state
          })}

          for (const address2Item in pathToData){
          address2Data.push({
          city2: pathToData[address2Item].address[1].city,
          country2: pathToData[address2Item].address[1].country,
          zip2: pathToData[address2Item].address[1].zip,
          street2: pathToData[address2Item].address[1].street,
          typea2: pathToData[address2Item].address[1].type,
          state2: pathToData[address2Item].address[1].state 
           })}

          // // primary contact data
          for (const contactItem in pathToData) {
          contactData.push({
          firstName: pathToData[contactItem].contact[0].firstName,
          lastName: pathToData[contactItem].contact[0].lastName,
          typec: pathToData[contactItem].contact[0].type,
          email: pathToData[contactItem].contact[0].email,
          phone: pathToData[contactItem].contact[0].phone,
          // firstName2: pathToData[contactItem].contact[1].firstName,
          // lastName2: pathToData[contactItem].contact[1].lastName,
          // typec2: pathToData[contactItem].contact[1].type,
          // email2: pathToData[contactItem].contact[1].email,
          // phone2: pathToData[contactItem].contact[1].phone
          })}

          for (const contact2Item in pathToData) {
          contact2Data.push({
          firstName2: pathToData[contact2Item].contact[1].firstName,
          lastName2: pathToData[contact2Item].contact[1].lastName,
          typec2: pathToData[contact2Item].contact[1].type,
          email2: pathToData[contact2Item].contact[1].email,
          phone2: pathToData[contact2Item].contact[1].phone
          })}

          for (const configItem in pathToData) {
          configData.push({
          imageCapture: pathToData[configItem].configuration.Registration.imageCapture,
          idCapture: pathToData[configItem].configuration.Registration.idCapture,
          // }) }
          // for (const processItem in pathToData) {
          // pprocessData.push({
          frameInterval: pathToData[configItem].configuration.postProcess.frameInterval,
          anomalyDuration: pathToData[configItem].configuration.postProcess.anomalyDuration,
          smoothingFrame: pathToData[configItem].configuration.postProcess.smoothingFrame
          })}
          //console.log(configData)

        // update state
        this.setState({
            data: basicData[0],
            //data1: basic1Data[0],
            contact: contactData[0],
            contact2: contact2Data[0],
            address: addressData[0],
            address2: address2Data[0],
            configuration: configData[0]});
        this.setState({dataLoaded: true});

        let RadioimgNo = document.getElementById("imgCaptureNo");
        let RadioimgYes = document.getElementById("imgCaptureYes");

        if (this.state.configuration.imageCapture === "true") {
          RadioimgYes.checked = true
        }

        if (this.state.configuration.imageCapture === "false") {
          RadioimgNo.checked = true
        }

        let RadioidNo = document.getElementById("idCaptureNo");
        let RadioidYes = document.getElementById("idCaptureYes");

        if (this.state.configuration.idCapture === "true") {
            RadioidYes.checked = true
        }
        if (this.state.configuration.idCapture === "false") {
          RadioidNo.checked = true
        }

        console.log(this.state);
      }).catch(error => alert(error));
    }



  handleSubmit(event) {

    event.preventDefault();
    let orgNamev = document.getElementById("orgname")
    //let orgIdv = document.getElementById("orgID")
    let typeav = document.getElementById("addresstype")
    let streetav = document.getElementById("street")
    let cityav = document.getElementById("city")
    let stateav = document.getElementById("state")
    let zipav = document.getElementById("zip")
    let countryav = document.getElementById("country")
    let fnamecv = document.getElementById("fname")
    let lnamecv = document.getElementById("lname")
    let typecv = document.getElementById("contacttype")
    let phonecv = document.getElementById("phone")
    let emailcv = document.getElementById("email")
    let smoothingfv = document.getElementById("smoothingframe")
    let anomalydv = document.getElementById("anomalyduration")
    let frameiv = document.getElementById("frameinterval")
    // let imageNov = document.getElementById("imgCaptureNo")
    // let imageYesv = document.getElementById("imgCaptureYes")
    // let idNov = document.getElementById("idCaptureNo")
    // let idYesv = document.getElementById("idCaptureYes")
    let emailv = document.getElementById("email")
    let rg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValid= rg.test(emailv.value)

    if (!emailValid)
    {
      alert("The email entered is not valid")
    }
    else if (orgNamev.value === "" || typeav.value === "" || streetav.value === "" || cityav.value === "" || 
    stateav.value === "" || zipav.value === "" || countryav.value === "" || fnamecv.value === "" || lnamecv.value === "" ||
    typecv.value === "" || phonecv.value === "" || emailcv.value === "" || !this.idCapVal   || !this.imgCapVal || smoothingfv.value === "" ||
    anomalydv.value === "" || frameiv.value === "")
    {
      alert ("One or more required fields are missing")
    }
    else {
      // store editable data in new object
      const newData = {
        description: this.state.data.description,
        //id: this.state.data.id,
        contact: this.state.contact,
        address: this.state.address,
        configuration: this.state.configuration
      };
      // store value of id
      const itemToEdit = this.state.data.id;
  
      // make api call to update data
      axios.patch(`/orgs/${itemToEdit}`, newData)
      // if request is successful, redirect to manage tests
      .then(res => {
        if (res.status === 200) {
        this.props.history.push('/manage-orgs')
        } 
      })
      // else, display error
      .catch(error => alert(error))    
}
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

      const uneditabletextbxstyle = {
        width: "70%",
        padding: "12px 20px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "inline-block",
        backgroundColor: "#f2f2f2"
      }

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
          <h1 className={classes.header}>Add Organizations</h1>
          <form className={classes.wrapper} 
            onSubmit={this.handleSubmit}>
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
                        style={textbxstyle2} 
                        type="text" 
                        id="orgname" 
                        name="orgname"
                        value={this.state.data.description}
                        onChange={this.handleNameChange}
                        onBlur={this.orgnameVal}
                        />
                      <br/>
                      <span 
                          id="orgnameErrMsg"
                          style={{color:"red"}}>
                      </span>
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
                          style={uneditabletextbxstyle} 
                          type="text" 
                          id="orgID" 
                          name="orgID"
                          readOnly
                          value={this.state.data.id}
                          //onBlur={this.orgidVal}
                          onChange={this.handleOrgIDChange}
                          />
                        <br/>
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
                                value={this.state.address.typea}
                                onChange={this.handletofaChange} 
                                name="addresstype"
                                onBlur={this.addresstypeVal}
                                />
                                <br/>
                                <span 
                                  id="addresstypeErrMsg"
                                  style={{color:"red"}}>
                                </span>
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
                                  onChange={this.handlestreetChange}
                                  value={this.state.address.street}
                                  name="street"
                                  onBlur={this.streetVal}
                                  />
                                <br/>
                                <span
                                  id="streetErrMsg"
                                  style={{color:"red"}}>
                                </span>
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
                                  onChange={this.handlecityChange}
                                  value={this.state.address.city}
                                  name="city"
                                  onBlur={this.cityVal}
                                  />
                                <br/>
                                <span 
                                  id="cityErrMsg"
                                  style={{color:"red"}}>
                                </span>
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
                                  onChange={this.handlestateChange} 
                                  value={this.state.address.state}
                                  name="state"
                                  onBlur={this.stateVal}
                                  />
                                <br/>
                                <span 
                                  id="stateErrMsg"
                                  style={{color:"red"}}>
                                </span>
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
                                  style={textbxstyle2} 
                                  type="text" 
                                  id="zip" 
                                  onChange={this.handlezipChange}
                                  value={this.state.address.zip}
                                  name="zip"
                                  onBlur={this.zipVal}
                                  />
                                <br/>
                                <span 
                                  id="zipErrMsg"
                                  style={{color:"red"}}>
                                </span>
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
                                style={textbxstyle2} 
                                type="text" 
                                id="country"
                                onChange={this.handlecountryChange}
                                value={this.state.address.country} 
                                name="country"
                                onBlur={this.countryVal}
                                />
                                <br/>
                                <span 
                                  id="countryErrMsg"
                                  style={{color:"red"}}>
                                </span>
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
                                  onChange={this.handletofa2Change}
                                  value={this.state.address2.typea2} 
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
                                  onChange={this.handlestreet2Change}
                                  value={this.state.address2.street2} 
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
                                  onChange={this.handlecity2Change} 
                                  value={this.state.address2.city2}
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
                                value={this.state.address2.state2}
                                onChange={this.handlestate2Change}
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
                                  type="text" 
                                  id="zip2"
                                  onChange={this.handlezip2Change} 
                                  value={this.state.address2.zip2}
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
                                  style={textbxstyle2} 
                                  type="text" 
                                  id="country2"
                                  onChange={this.handlecountry2Change} 
                                  value={this.state.address2.country2}
                                  name="country2"
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
                                    value={this.state.contact.typec} 
                                    id="contacttype" 
                                    name="contacttype"
                                    onChange={this.handletofcChange}
                                    onBlur={this.contacttypeVal}
                                    />
                                    <br/>
                                    <span 
                                      id="contacttypeErrMsg"
                                      style={{color:"red"}}>
                                    </span>
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
                                    style={textbxstyle}
                                    type="text" 
                                    id="fname"
                                    value={this.state.contact.firstName}
                                    onChange={this.handlefnameChange}  
                                    name="fname"
                                    onBlur={this.fnameVal}
                                   />
                                  <br/>
                                  <span 
                                    id="fnameErrMsg"
                                    style={{color:"red"}}>
                                  </span>
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
                                    style={textbxstyle} 
                                    type="text" 
                                    id="lname"
                                    onChange={this.handlelnameChange}
                                    value={this.state.contact.lastName}  
                                    name="lname"
                                    onBlur={this.lnameVal}
                                    />
                                  <br/>
                                  <span 
                                    id="lnameErrMsg"
                                    style={{color:"red"}}>
                                  </span>
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
                                    style={textbxstyle} 
                                    type="text" 
                                    id="email"
                                    onChange={this.handleemailChange} 
                                    value={this.state.contact.email} 
                                    name="email"
                                    onBlur={this.emailVal}                                   
                                    />
                                  <br/>
                                  <span 
                                    id="emailErrMsg"
                                    style={{color:"red"}}>
                                </span>
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
                                    //onBlur = {()=> this.Validatorphone()} 
                                    style={textbxstyle} 
                                    type="text" 
                                    id="phone"
                                    onChange={this.handlephoneChange}
                                    value={this.state.contact.phone}  
                                    name="phone"
                                    onBlur={this.phoneVal}
                                    />
                                  <br/>
                                  <span 
                                    id="phoneErrMsg"
                                    style={{color:"red"}}>
                                  </span>
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
                                  onChange={this.handletofc2Change}
                                  value={this.state.contact2.typec2}  
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
                                  onChange={this.handlefname2Change}
                                  value={this.state.contact2.firstName2}  
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
                                  onChange={this.handlelname2Change}
                                  value={this.state.contact2.lastName2} 
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
                                  onChange={this.handleemail2Change}
                                  value={this.state.contact2.email2}  
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
                                  style={textbxstyle} 
                                  type="text" 
                                  id="phone2"
                                  onChange={this.handlephone2Change}
                                  value={this.state.contact2.phone2}  
                                  name="phone2"
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
                                <br/>
                                <span 
                                    id="imgCaptureErrMsg"
                                    style={{color:"red"}}>
                                  </span>
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
                                <br/>
                                <span 
                                    id="idCaptureErrMsg"
                                    style={{color:"red"}}>
                                </span>
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
                                style={textbxstyle} 
                                type="text" 
                                id="frameinterval"
                                value={this.state.configuration.frameInterval}
                                onChange={this.handleframeiChange} 
                                name="frameinterval"
                                onBlur={this.frameintervalVal}                                
                                />
                              <br/>
                              <span 
                                id="frameintervalErrMsg"
                                style={{color:"red"}}>
                              </span>
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
                                onChange={this.handleanomdChange}
                                value={this.state.configuration.anomalyDuration}  
                                name="anomalyduration"
                                onBlur={this.anomalydurationVal}
                                />
                              <br/>
                              <span 
                                id="anomalydurationErrMsg"
                                style={{color:"red"}}>
                              </span>
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
                                style={textbxstyle} 
                                type="text" 
                                id="smoothingframe"
                                value={this.state.configuration.smoothingFrame} 
                                onChange={this.handlesmoothfChange}
                                name="smoothingframe"
                                onBlur={this.smoothingframeVal}
                                />
                              <br/>
                              <span 
                                id="smoothingframeErrMsg"
                                style={{color:"red"}}>
                              </span>
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
                                style={{textAlign:"center", paddingRight: "2%", paddingTop:"2%"}}>
                                <input
                                  onClick={this.stateUpdate}
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

export default withRouter(EditOrgForm);