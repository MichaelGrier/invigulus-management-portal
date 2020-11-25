import React, {Component} from 'react';

import classes from './TestForm.module.css';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';

class TestForm extends Component {

    constructor() {
        super();
        this.state = {
        itemtype: "",
        testorgid: "",
        testid: "",
        tds: "",
        }
      }

    ValidatorItemType() {
    if (this.state.itemtype === "")
      {
        this.setState ({emptyErroritype: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErroritype: ""})
      }
    }
    ValidatorToI() {
      if (this.state.testorgid === "" )
      {
        this.setState ({emptyErrortestOid: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrortestOid: ""})
      }
    }
    ValidatorTid() {
      if (this.state.testid === "")
      {
        this.setState ({emptyErrortestid: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrortestid: ""})
      }
    }
    Validatortds() {
      if (this.state.tds === "" )
      {
        this.setState ({emptyErrortds: "This field cannot be empty"})
      }
      else 
      {
        this.setState ({emptyErrortds: ""})
      }
    }

    SubmitValidator() {
        if (this.state.itemtype === "" || this.state.testorgid === "" || this.state.testid === "" || this.state.tds === "" )
        {
            alert("A required field is missing")
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
            <Heading2> Manage Tests</Heading2>
          <form className={classes.wrapper}>
              <fieldset>
              
              <div className={classes.flexChild}>
                <br/>
              <table>
            
                <tr ><td id={classes.cell1}  style={{textAlign:"right"}} ><label for="ItemType" style={labelstyle}>Item Type:</label></td>
                <td className={classes.cell2} style={{textAlign:"left", width:"30%"}}><input onBlur = {()=> this.ValidatorItemType()} onChangeText={(text) => {this.setState({ name: text })}} style={textbxstyle} type="text" id="itemType" name="itemType"/>
                <p style={{color:"red"}}>{this.state.emptyErroritype}</p></td>
                </tr>
            
                <tr ><td className={classes.cell1} style={{textAlign:"right"}}><label for="testOrdId" style={labelstyle}>Test Organization ID:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input onBlur = {()=> this.ValidatorToI()} onChangeText={(text) => {this.setState({ name: text })}} style={textbxstyle} type="text" id="testOrgId" name="testOrgId"/>
                <p style={{color:"red"}}>{this.state.emptyErrortestOid}</p></td>
                </tr>

                <tr ><td className={classes.cell1} style={{textAlign:"right"}}><label for="id" style={labelstyle}>Test ID:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input onBlur = {()=> this.ValidatorTid()} onChangeText={(text) => {this.setState({ name: text })}} style={textbxstyle} type="text" id="id" name="id"/>
                <p style={{color:"red"}}>{this.state.emptyErrortestid}</p></td>
                </tr>

                <tr><td className={classes.cell1} style={{textAlign:"right"}}><label for="tds" style={labelstyle}>Test Delivery System:</label></td>
                <td className={classes.cell2} style={{textAlign:"left"}}><input onBlur = {()=> this.Validatortds()} onChangeText={(text) => {this.setState({ name: text })}} style={textbxstyle} type="text" id="tds" name="tds"/>
                <p style={{color:"red"}}>{this.state.emptyErrortds}</p></td>
                </tr>
                </table> 
                </div>
                <div className={classes.flexChild}>
                  <table>
                  <tr>
                  <td className={classes.cell7} style={{textAlign:"right", paddingRight: "2%", paddingTop:"2%"}}><button onClick={this.SubmitValidator} style={buttonstyle}>Edit</button></td>
                  <td className={classes.cell8} style={{textAlign:"left", paddingLeft: "2%", paddingTop:"2%"}}><button onClick={this.SubmitValidator} style={buttonstyle}>Add</button></td>
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
export default TestForm;