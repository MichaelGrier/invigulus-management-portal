import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      // if an error from the api is received, update state
      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error})
      });
    }

    // when user clicks on the backdrop, set state back to null (removing modal)
    userAcknowledgedErrorHandler = () => {
      this.setState({error: null});
    }

    render() {
      return (
        <>
          {/* if this.state.error is not null, display modal with error message received from api */}
          {/* otherwise, display nothing */}
          <Modal 
            show={this.state.error}
            clicked={this.userAcknowledgedErrorHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
}

export default withErrorHandler;