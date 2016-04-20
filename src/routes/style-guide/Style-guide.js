import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style-guide.scss';

const title = 'Style Guide';

function StyleGuide(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Style Guide</h1>
        <p>...</p>
      </div>
    </div>
  );
}

StyleGuide.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(StyleGuide);
