import React, {Component} from 'react';
import axios from '../../../axios';
import {withRouter} from 'react-router-dom';

import classes from './EditTestForm.module.css';
import Heading2 from '../../../components/Form Inputs/Heading2/Heading2';

class TestForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        itemType: "",
        testOrgId: "",
        id: "",
        description: "",
        tds: "",
      },
      isError: {
        itemType: "",
        testOrgId: "",
        id: "",
        description: "",
        tds: "",
      }
    }
   
    this.handleTdsChange = this.handleTdsChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // parse query from URL string
    const query = new URLSearchParams(this.props.location.search);
    const data = {};
    for (let param of query.entries()) {
      // ['itemType', 'TST']
      data[param[0]] = param[1];
    }
    this.setState({data: data});
  }

  handleDescriptionChange(event) {
    let data = {...this.state.data};
    data.description = event.target.value
    this.setState({data});
  }

  handleTdsChange(event) {
    let data = {...this.state.data};
    data.tds = event.target.value
    this.setState({data});
  }

  handleSubmit(event) {
    // prevent default submit action
    event.preventDefault();
    // store editable data in new object
    const newData = {
      description: this.state.data.description,
      tds: this.state.data.tds
    };
    // store value of id
    const itemToEdit = this.state.data.id;

    // make api call to update data
    axios.patch(`/tests/${itemToEdit}`, newData)
         // if request is successful, redirect to manage tests
         .then(res => {
           if (res.status === 200) {
            this.props.history.push('/manage-tests')
           } 
         })
         // else, display error
         .catch(error => alert(error))    
  }

  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    const formValid = ({ isError, ...rest }) => {
      let isValid = false;
  
      Object.values(isError).forEach(val => {
          if (val.length > 0) {
              isValid = false
          } else {
              isValid = true
          }
      });
  
      Object.values(rest).forEach(val => {
          if (val === null) {
              isValid = false
          } else {
              isValid = true
          }
      });
  
      return isValid;
  };

    switch (name) {
        case "itemType":
            isError.itemType =
                value === ""? "This field is required" : "" ;
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
          <Heading2>Edit Test</Heading2>
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
                          readOnly
                          value={this.state.data.itemType} 
                          onChange={this.handleItemTypeChange}
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
                          type="text" 
                          id="testOrgId" 
                          name="testOrgId"
                          readOnly
                          value={this.state.data.testOrgId}
                          onChange={this.handleTestOrgIdChange}
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
                          type="text" 
                          id="id" 
                          name="id"
                          readOnly
                          value={this.state.data.id} 
                          onChange={this.handleIdChange}
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
                          value={this.state.data.description} 
                          onChange={this.handleDescriptionChange}
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
                          type="text" 
                          id="tds" 
                          name="tds"
                          value={this.state.data.tds}
                          onChange={this.handleTdsChange}
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