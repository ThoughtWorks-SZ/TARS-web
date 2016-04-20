import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
//import s from './Textbox.scss';

class Textbox extends Component {

  onChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <input type="text" value={this.props.defaultText} />
    );
  }
}

export default (Textbox);
//export default withStyles(s)(Textbox);



