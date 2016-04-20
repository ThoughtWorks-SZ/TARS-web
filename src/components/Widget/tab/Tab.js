import React, { PropTypes } from 'react';
import Table from '../../../components/Widget/Table/Table';
import ReactTabs from 'react-bootstrap/lib/Tabs';
import ReactTab from 'react-bootstrap/lib/Tab';

function Tab({ columnNames, columnData }) {
  return (
    <ReactTabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <ReactTab eventKey={1} title="全部">
        <Table columnNames={columnNames} columnData={columnData} />
      </ReactTab>
      <ReactTab eventKey={2} title="已发布">已发布</ReactTab>
      <ReactTab eventKey={3} title="未发布">未发布</ReactTab>
    </ReactTabs>
  );
}


Tab.propTypes = {
  columnNames: PropTypes.array,
  columnData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastModifyData: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
  })).isRequired,
};

export default Tab;
