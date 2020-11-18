import React, {Component} from 'react';

import classes from './ViewSessions.module.css';
import SmallButton from '../../components/UI/SmallButton/SmallButton';
import TextBox from '../../components/Form Inputs/TextBox/TextBox';
import {Tabs, Tab, Table} from 'react-bootstrap';

import Face from '../../assets/images/face.jpg';
import ID from '../../assets/images/id.jpg';

class ViewSessions extends Component {
  searchHandler = () => {
    alert("You searched");
  }

  render() {
    return(
      <>
        <main className={classes.main}>
          <h1 className={classes.header}>View Sessions</h1>
          <div className={classes.wrap}>
            <div className={classes.searchBar}>
              <h5>Enter Session ID</h5>
              <TextBox id='search'/>
              <SmallButton clicked={this.searchHandler}>Find</SmallButton>
            </div>
            <div className={classes.tabWrap}>
              <Tabs defaultActiveKey="main" id="sessionTabs">
                <Tab eventKey="main" title="Main">
                  <Table id='mainTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th>Session ID</th>
                        <th>Item Type</th>
                        <th>Session Org ID</th>
                        <th>Session Test ID</th>
                        <th>Session User ID</th>
                        <th>Session Test ID</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>

                <Tab eventKey="location" title="Location">
                  <Table id='locationTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th>Latitude</th>
                        <th>Longitude</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>

                <Tab eventKey="userAgent" title="User Agent">
                  <Table id='userAgentTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th>User Agent</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>' '</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>

                <Tab eventKey="analytics" title="Analytics">
                  <Table id='analyticsTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th colSpan="8">PARAMETERS</th>
                      </tr>
                      <tr>
                        <th colSpan="2">Source</th>
                        <th colSpan="2">Interval</th>
                        <th colSpan="2">Duration</th>
                        <th colSpan="2">Frame</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="2">#</td>
                        <td colSpan="2">#</td>
                        <td colSpan="2">#</td>
                        <td colSpan="2">#</td>
                      </tr>
                    </tbody>
                    <br/>

                    <thead>
                      <tr>
                        <th colSpan="8">VIDEO ATTRIBUTES</th>
                      </tr>
                      <tr>
                        <th colSpan="2">Duration of Video</th>
                        <th colSpan="2">Frames</th>
                        <th colSpan="2">Frames Processed</th>
                        <th colSpan="2">Fps</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="2">#</td>
                        <td colSpan="2">#</td>
                        <td colSpan="2">#</td>
                        <td colSpan="2">#</td>
                      </tr>
                    </tbody>
                    <br/>

                    <thead>
                      <tr>
                        <th colSpan="8">STATISTICS</th>
                      </tr>
                      <tr>
                        <th colSpan="3">Video Processing Time</th>
                        <th colSpan="3">Anomaly Processing Time</th>
                        <th colSpan="2">Frames Processed per Second</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="3">#</td>
                        <td colSpan="3">#</td>
                        <td colSpan="2">#</td>
                      </tr>
                    </tbody>
                    <br/>

                    <thead>
                      <tr>
                        <th colSpan="8">FACES</th>
                      </tr>
                      <tr>
                        <th colSpan="4">Single Face Ratio</th>
                        <th colSpan="4">Average Face Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="4">#</td>
                        <td colSpan="4">#</td>
                      </tr>
                    </tbody>
                    <br/>

                    <thead>
                      <tr>
                        <th colSpan="8">ANOMALIES</th>
                      </tr>
                      <tr>
                        <th>Anomaly ID</th>
                        <th>Number of Faces Detected</th>
                        <th>Relative Start Frame</th>
                        <th>Relative End Frame</th>
                        <th>Absolute Start Frame</th>
                        <th>Absolute Start Frame</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>
                    <br/>
                  </Table>
                </Tab>

                <Tab eventKey="openTok" title="OpenTok Archive">
                  <Table id='openTokTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th>Created At</th>
                        <th>Duration</th>
                        <th>Event</th>
                        <th>Has Audio</th>
                        <th>Has Video</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>

                    <thead>
                      <tr>
                        <th>Archive ID</th>
                        <th>Archive Name</th>
                        <th>Output Mode</th>
                        <th>Partner ID</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>
                    
                    <thead>
                      <tr>
                        <th>Project ID</th>
                        <th colSpan="2">Reason</th>
                        <th>Resolution</th>
                        <th>Session ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td colSpan="2">#</td>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>

                    <thead>
                      <tr>
                        <th>sha256sum</th>
                        <th>Size</th>
                        <th>Status</th>
                        <th>Updated At</th>
                        <th>Process State</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>

                <Tab eventKey="examinee" title="Examinee">
                  <Table id='examineeTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Test Code</th>
                        <th>State</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="images" title="Images">
                  <Table id='imageTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th>Face</th>
                        <th>Identification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img alt="Face" src={Face}></img></td>
                        <td><img alt="Identification" src={ID}></img></td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="test" title="Test">
                  <Table id='testTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th>Test ID</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="videos" title="Videos">
                  <Table id='videosTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th>Environment</th>
                        <th>Face</th>
                        <th>Screen</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href='https://www.youtube.com/watch?v=HYUiahljMMc' target='_blank' rel='noreferrer'>https://www.youtube.com/watch?v=HYUiahljMMc</a></td>
                        <td><a href='https://www.youtube.com/watch?v=HYUiahljMMc' target='_blank' rel='noreferrer'>https://www.youtube.com/watch?v=HYUiahljMMc</a></td>
                        <td><a href='https://www.youtube.com/watch?v=HYUiahljMMc' target='_blank' rel='noreferrer'>https://www.youtube.com/watch?v=HYUiahljMMc</a></td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="dates" title="Dates">
                  <Table id='datesTable' striped bordered hover>
                    <thead>
                      <tr>
                        <th>Date Created</th>
                        <th>Date Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>#</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
              </Tabs>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default ViewSessions;

