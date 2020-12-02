import React, {Component} from 'react';
import axios from '../../../axios';

import classes from './ViewSession.module.css';
import {Tabs, Tab, Table} from 'react-bootstrap';

class ViewSession extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        analytics: {},
        created: 0,
        endTime: 0,
        examinee: {},
        geoLocation: {},
        images: {},
        itemId: '',
        itemType: '',
        openTok: {},
        processState: '',
        sessionOrgId: '',
        sessionTestId: '',
        sessionUserId: '',
        startTime: 0,
        test: {},
        updated: 0,
        userAgent: '',
        videos: {},
      },
      dataLoaded: false
    }
  }

  componentDidMount() {
    // parse query from URL string to retrieve sessionId
    const query = new URLSearchParams(this.props.location.search);
    const sessionId = {};
    for (let param of query.entries()) {
      sessionId[param[0]] = param[1];
    }

    // extract itemId from sessionId object and process it for axios call (remove dynamodb prefix)
    const preProcessedItemId = sessionId.itemId
    const stringToSlice = preProcessedItemId.toString();
    const processedItemId = stringToSlice.slice(4);

    // get session by sessionId
    axios.get(`/sessions/${processedItemId}`).then(res => {
      //console.log(res.data.result.Items);
      const pathToData = res.data.result.Items;
      const loadedData = [];

      // push data objects into an array
      for (const Item in pathToData) {
        loadedData.push({
          analytics: pathToData[Item].analytics,
          created: pathToData[Item].created,
          endTime: pathToData[Item].endTime,
          examinee: pathToData[Item].examinee,
          geoLocation: pathToData[Item].geoLocation,
          images: pathToData[Item].images,
          itemId: pathToData[Item].itemId,
          itemType: pathToData[Item].itemType,
          openTok: pathToData[Item].openTok,
          processState: pathToData[Item].processState,
          sessionOrgId: pathToData[Item].sessionOrgId,
          sessionTestId: pathToData[Item].sessionTestId,
          sessionUserId: pathToData[Item].sessionUserId,
          startTime: pathToData[Item].startTime,
          test: pathToData[Item].test,
          updated: pathToData[Item].updated,
          userAgent: pathToData[Item].userAgent,
          videos: pathToData[Item].videos,
        });
      }
      // update state
      this.setState({data: loadedData[0]});
      this.setState({dataLoaded: true});

      
    });
  }

  render() {
    return(
      <>
        {this.state.dataLoaded 
          ? 
          <main className={classes.main}>
            <h1 className={classes.header}>View Session</h1>
            <div className={classes.wrap}>
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
                          <th>Start Time</th>
                          <th>End Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.state.data.itemId}</td>
                          <td>{this.state.data.itemType}</td>
                          <td>{this.state.data.sessionOrgId}</td>
                          <td>{this.state.data.sessionTestId}</td>
                          <td>{this.state.data.sessionUserId}</td>
                          <td></td>
                          <td></td>
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
                          <td>{this.state.data.geoLocation.latitude}</td>
                          <td>{this.state.data.geoLocation.longitude}</td>
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
                          <td>{this.state.data.userAgent}</td>
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
                          <td colSpan="2">{this.state.data.analytics.postProcess.parameters.interval}</td>
                          <td colSpan="2">{this.state.data.analytics.postProcess.parameters.duration}</td>
                          <td colSpan="2">{this.state.data.analytics.postProcess.parameters.frame}</td>
                        </tr>
                      </tbody>
      
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
                          <td colSpan="2"></td>
                          <td colSpan="2"></td>
                          <td colSpan="2"></td>
                          <td colSpan="2"></td>
                        </tr>
                      </tbody>
      
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
                          <td colSpan="3"></td>
                          <td colSpan="3"></td>
                          <td colSpan="2"></td>
                        </tr>
                      </tbody>
      
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
                    </Table>
                  </Tab>
      
                  <Tab eventKey="anomalies" title="Anomalies">
                    <Table id='anomaliesTable' striped bordered hover>
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
                          <td>{this.state.data.processState}</td>
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
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.state.data.examinee.id}</td>
                          <td>{this.state.data.examinee.email}</td>
                          <td>{this.state.data.examinee.firstName}</td>
                          <td>{this.state.data.examinee.lastName}</td>
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
                          <td>{this.state.data.images.face}</td>
                          <td>{this.state.data.images.identification}</td>
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
                          <td>{this.state.data.test.id}</td>
                          <td>{this.state.data.test.description}</td>
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
                          <td><a href={this.state.data.videos.environment} target='_blank' rel='noreferrer'>{this.state.data.videos.environment}</a></td>
                          <td><a href={this.state.data.videos.face} target='_blank' rel='noreferrer'>{this.state.data.videos.face}</a></td>
                          <td><a href={this.state.data.videos.screen} target='_blank' rel='noreferrer'>{this.state.data.videos.screen}</a></td>
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
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </main> 
          : <h1>loading...</h1>}
      </>
    );
  }
}

export default ViewSession;

// // reformat dates received from database
// const unformattedStartTime = new Date(this.state.data.startTime);
// const startTime = unformattedStartTime.toISOString();

// const unformattedEndTime = new Date(this.state.data.endTime);
// const endTime = unformattedEndTime.toISOString();

// const unformattedCreated = new Date(this.state.data.created);
// const created = unformattedCreated.toISOString();

// const unformattedUpdated = new Date(this.state.data.updated);
// const updated = unformattedUpdated.toISOString();

