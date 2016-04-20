/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Tab from '../../components/Widget/Tab/Tab';
import s from './Home.scss';

const title = 'React Starter Kit';

function Home({ columnNames, columnData }, context) {
  context.setTitle(title);
  return (
    <Tab columnNames={columnNames} columnData={columnData} />
  );
}

Home.propTypes = {
  columnNames: PropTypes.array.isRequired,
  columnData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastModifyData: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    operation: PropTypes.string,
  })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
