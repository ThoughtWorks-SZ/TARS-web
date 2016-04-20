import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Button from './Button/Button';

function Popup({type,message}) {
  const icon = type == "error" ? <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
    : <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
  return (
    <div class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">{icon}</h4>
          </div>
          <div class="modal-body">
            <p>{message}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default (Popup);
//export default withStyles(s)(Dropdown);


