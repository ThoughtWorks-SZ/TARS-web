import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Textbox.jsx.scss';

let { Component } = React;

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

export default withStyles(s)(Textbox);



