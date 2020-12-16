import React from 'react';

import classes from './Alert.module.css';

const Alert = () => {
    function CustomAlert() {
        render = function() {
            let winW = window.innerWidth;
            let winH = window.innerHeight;
            let dialogoverlay = document.getElementById('dialogoverlay');
            let dialogbox = document.getElementById('dialogbox');
            dialogoverlay.style.display = "block";
            dialogoverlay.style.height = winH+"px";
            dialogbox.style.left = (winW/2) - (550 * .5) + "px";
            dialogbox.style.top = "100px";
            dialogbox.style.display = "block";
            document.getElementById('dialoghead').innerHTML = "Acknowledge";
            document.getElementById('dialogbody').innerHTML = dialog;
            document.getElementById('dialogboxfoot').innerHTML = '<button onClick="Alert1.ok()">OK</button>'
        }
        ok = function() {
            document.getElementById('dialogbox').style.display = "none";
            document.getElementById('dialogoverlay').style.display = "none";
        }
    }
    let Alert1 = new CustomAlert();
  return (
    <div>
    <div className={classes.dialogoverlay} id ="dialogoverlay"></div>
    <div className= {classes.dialogbox} id="dialogbox">
    <div>
        <div className={classes.dialoghead} id="dialogboxhead"></div>
        <div className={classes.dialogbody} id="dialogboxbody"></div>
        <div className={classes.dialogfoot} id="dialogboxfoot"></div>
    </div>
    </div>
    </div>
  );
}

export default Alert;

    // className={classes.smallButton}
    // onClick={props.clicked}
    // >
    // {props.children}
    // </div>