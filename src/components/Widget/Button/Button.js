import React, { Component, PropTypes } from 'react';
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './Button.scss';

class Button extends Component {

  render() {
    var buttonToDisplay;
    if(this.props.buttonType == "primary") {
      buttonToDisplay = <button type="button" className={s.primaryButton}>{this.props.buttonText}</button>
    }
    else if(this.props.buttonType == "info") {
      buttonToDisplay = <button type="button" className={s.infoButton}>{this.props.buttonText}</button>
    }
    else if(this.props.buttonType == "warning") {
      buttonToDisplay = <button type="button" className={s.warningButton} disabled="true">{this.props.buttonText}</button>
    }
    else if(this.props.buttonType == "default") {
      buttonToDisplay = <button type="button" className={s.defaultButton} disabled="true">{this.props.buttonText}</button>
    }

    return (
      <div>
        {buttonToDisplay}
      </div>
    );
  }
}

export default withStyles(s)(Button);
