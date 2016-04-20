import React, { PropTypes } from 'react';
import Table from '../../../components/Widget/Table/Table';
import ReactTabs from 'react-bootstrap/lib/Tabs';
import ReactTab from 'react-bootstrap/lib/Tab';

function Tabs({ tabs, data }) {
  if (tabs === undefined) {
    return;
  }

  return (
    <ReactTabs defaultActiveKey={0} id="uncontrolled-tab-example">
      {tabs.map((tab, index)=>(
        <ReactTab eventKey={index} title={tab}>{data[index]}</ReactTab>
      ))}
    </ReactTabs>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Tabs;
