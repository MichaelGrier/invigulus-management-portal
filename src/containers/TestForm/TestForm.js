import React, {Component} from 'react';
import axios from '../../axios';
import {withRouter} from 'react-router-dom';

import classes from './TestForm.module.css';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';

class TestForm extends Component {
  constructor() {
    super();
    this.state = {
      itemType: "",
      testOrgId: "",
      id: "",
      description: "",
      tds: "",
      isError: {
        itemType: "",
        testOrgId: "",
        id: "",
        description: "",
        tds: "",
      }
    }
   

    this.handleItemTypeChange = this.handleItemTypeChange.bind(this);
    this.handleTestOrgIdChange = this.handleTestOrgIdChange.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleTdsChange = this.handleTdsChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // whenever a change is made to an input field, update the corresponding state property
  handleItemTypeChange(event) {
    this.setState({itemType: event.target.value});
  }

  handleTestOrgIdChange(event) {
    this.setState({testOrgId: event.target.value});
  }

  handleIdChange(event) {
    this.setState({id: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleTdsChange(event) {
    this.setState({tds: event.target.value});
  }

  handleSubmit(event) {
  
  //   const formValid = ({ isError, ...rest }) => {
  //     let isValid = false;
  
  //     Object.values(isError).forEach(val => {
  //         if (val.length > 0) {
  //             isValid = false
  //         } else {
  //             isValid = true
  //         }
  //     });
  
  //     Object.values(rest).forEach(val => {
  //         if (val === null) {
  //             isValid = false
  //         } else {
  //             isValid = true
  //         }
  //     });
  
  //     return isValid;
  // };
    if (this.state.itemType === "" || this.state.testOrgId === "" || this.state.id === "" || this.state.description === "" || this.state.tds === "") {
      console.log(this.state)
      alert("One or more required fields are missing")
    }
    else {
      // prevent default submit action
      //event.preventDefault();
       // distribute data stored in state into new object
       const formData = {...this.state}

       // make api call to post data
       axios.post('/tests', formData)
            .then(response => console.log(response))
            .catch(error => console.log(error));
   
       //redirect to confirmation page
       this.props.history.push('/add-test-confirmation')
    }
  }

  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
        case "itemType":
            isError.itemType =
                value === ""? "This field is required" : "";
            break;
        case "testOrgId":
            isError.testOrgId = value === ""? "This field is required": "";
            break;
        case "id":
            isError.id =
                value === ""? "This field is required": "";
            break;
        case "description":
            isError.description =
                value === ""? "This field is required": "";
            break;
        case "tds":
            isError.tds =
                value === ""? "This field is required": "";
            break;
        default:
            break;
    }

    this.setState({
        isError,
        [name]: value
    })
};

  render () {
    
    const { isError } = this.state

    const labelstyle = {
      color: "#3cB650",
      fontFamily: "sans-serif",
      fontWeight: "400",
      padding: "20px 75px 20px 0",
      position: "relative",
      textRendering: "optimizeLegibility",
      display: "inline-block",
      width: "100%"
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
  

    return (
      <div>
        <main className={classes.main}>
          <Heading2>Add Test</Heading2>
          <form className={classes.wrapper} onSubmit={this.handleSubmit}>
            <fieldset>
              <div className={classes.flexChild}>
                <br/>
                <table>
                  <tbody>
                    <tr >
                      <td 
                        className={classes.cell1}  
                        style={{textAlign:"right"}}
                      >
                        <label 
                          htmlFor="itemType" 
                          style={labelstyle}
                        >Item Type(TST):
                        </label>
                      </td>
                      <td 
                        className={classes.cell2} 
                        style={{textAlign:"left", width:"30%"}}
                      >
                        <input
                          style={textbxstyle}                        
                          type="text" 
                          id="itemType" 
                          name="itemType"
                          value={this.state.itemType} 
                          onChange={this.handleItemTypeChange}
                          onChange={this.formValChange}
                          onBlur={this.formValChange} 
                        />
                        <br/>
                        <span 
                          style={{color:"red"}}>
                          {isError.itemType}
                        </span>
                      </td>
                    </tr>               
                    <tr>
                      <td 
                        className={classes.cell1} 
                        style={{textAlign:"right"}}
                      >
                        <label 
                          htmlFor="testOrgId" 
                          style={labelstyle}
                        >Organization ID:
                        </label>
                      </td>
                      <td 
                        className={classes.cell2} 
                        style={{textAlign:"left"}}
                      >
                        <input 
                          style={textbxstyle} 
                          // onBlur = {()=> this.ValidatorToI()} 
                          type="text" 
                          id="testOrgId" 
                          name="testOrgId"
                          value={this.state.testOrgId}
                          onChange={this.handleTestOrgIdChange}
                          onChange={this.formValChange}
                          onBlur={this.formValChange} 
                        />
                        <br/>
                        <span 
                          style={{color:"red"}}>
                          {isError.testOrgId}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td 
                        className={classes.cell1} 
                        style={{textAlign:"right"}}
                        >
                        <label 
                          htmlFor="id" 
                          style={labelstyle}
                        >Test ID:
                        </label>
                      </td>
                      <td 
                        className={classes.cell2} 
                        style={{textAlign:"left"}}
                      >
                        <input
                          style={textbxstyle}  
                          // onBlur = {()=> this.ValidatorTid()}
                          type="text" 
                          id="id" 
                          name="id"
                          value={this.state.id} 
                          onChange={this.handleIdChange}
                          onChange={this.formValChange}
                          onBlur={this.formValChange} 
                        />
                        <br/>
                        <span 
                          style={{color:"red"}}>
                          {isError.id}
                        </span>
                      </td>
                    </tr>

                    <tr >
                      <td 
                        className={classes.cell1}  
                        style={{textAlign:"right"}}
                      >
                        <label 
                          htmlFor="description" 
                          style={labelstyle}
                        >Description:
                        </label>
                      </td>
                      <td 
                        className={classes.cell2} 
                        style={{textAlign:"left", width:"30%"}}
                      >
                        <input
                          style={textbxstyle} 
                          type="text" 
                          id="description" 
                          name="description"
                          value={this.state.description} 
                          onChange={this.handleDescriptionChange}
                          onChange={this.formValChange}
                          onBlur={this.formValChange} 
                        />
                        <br/>
                        <span 
                          style={{color:"red"}}>
                          {isError.description}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td 
                        className={classes.cell1} 
                        style={{textAlign:"right"}}
                      >
                        <label 
                          htmlFor="tds" 
                          style={labelstyle}
                        >Test Delivery System:
                        </label>
                      </td>
                      <td 
                        className={classes.cell2} 
                        style={{textAlign:"left"}}
                      >
                        <input
                          style={textbxstyle} 
                          // onBlur = {()=> this.Validatortds()} 
                          type="text" 
                          id="tds" 
                          name="tds"
                          value={this.state.tds}
                          onChange={this.handleTdsChange}
                          onChange={this.formValChange}
                          onBlur={this.formValChange}
                        />
                        <br/>
                        <span 
                          style={{color:"red"}}>
                          {isError.tds}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table> 
              </div>
              <div className={classes.flexChild}>
                <table>
                  <tbody>
                    <tr>
                      <td 
                        className={classes.cell8} 
                        style={{textAlign:"center", paddingLeft: "2%", paddingTop:"2%"}}
                      >
                        <input
                          style={buttonstyle}
                          type="submit"
                          value="Submit"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    );
  }
}
export default withRouter(TestForm);

// ValidatorItemType() {
//   if (this.state.itemtype === "")
//     {
//       this.setState ({emptyErroritype: "This field cannot be empty"})
//     }
//     else 
//     {
//       this.setState ({emptyErroritype: ""})
//     }
//   }
//   ValidatorToI() {
//     if (this.state.testorgid === "" )
//     {
//       this.setState ({emptyErrortestOid: "This field cannot be empty"})
//     }
//     else 
//     {
//       this.setState ({emptyErrortestOid: ""})
//     }
//   }
//   ValidatorTid() {
//     if (this.state.testid === "")
//     {
//       this.setState ({emptyErrortestid: "This field cannot be empty"})
//     }
//     else 
//     {
//       this.setState ({emptyErrortestid: ""})
//     }
//   }
//   Validatortds() {
//     if (this.state.tds === "" )
//     {
//       this.setState ({emptyErrortds: "This field cannot be empty"})
//     }
//     else 
//     {
//       this.setState ({emptyErrortds: ""})
//     }
//   }

//   SubmitValidator() {
//       if (this.state.itemtype === "" || this.state.testorgid === "" || this.state.testid === "" || this.state.tds === "" ) {
//         alert("A required field is missing")
//       }
//   }