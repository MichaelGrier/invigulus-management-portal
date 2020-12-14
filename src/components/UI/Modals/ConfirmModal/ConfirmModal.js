import React, {Component} from 'react';

import classes from './ErrorModal.module.css';
import SmallButton from '../../SmallButton/SmallButton';

class ErrorModal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
          <>
            <div
                show={this.props.show} 
                className={classes.Modal}
                style={{
                  transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: this.props.show ? '1' : '0',
                }}>
                {this.props.children}
                <div style={{marginTop: '4rem'}}></div>
              <SmallButton clicked={this.props.modalClosed}>Okay</SmallButton>
            </div>
          </>
        )
    }
}

export default ErrorModal;