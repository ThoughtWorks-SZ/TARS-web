import React, { PropTypes } from 'react';
import ReactTable from '../../../../node_modules/react-bootstrap/lib/Table';

function getColumnHeader(columnNames) {
  return columnNames.map((name) => (
    <th>{name}</th>
  ));
}

function getProps(data) {
  const props = [];
  for (const key in data) {
    if (data[key] !== undefined) {
      props.push(data[key]);
    }
  }
  return props;
}

function getColumnData(columnData) {
  return columnData.map((item, index) => (
    <tr>
      <td>{index}</td>
      {getProps(item).map((data) => (
        <td>{data}</td>
      ))}
    </tr>
  ));
}


function Table({ columnNames, columnData }) {
  return (
    <ReactTable striped bordered hover>
      <thead>
      <tr>
        {getColumnHeader(columnNames)}
      </tr>
      </thead>
      <tbody>
      {getColumnData(columnData)}
      </tbody>
    </ReactTable>
  );
}


Table.propTypes = {
  columnNames: PropTypes.array,
  columnData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastModifyData: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
  })).isRequired,
};

export default Table;
