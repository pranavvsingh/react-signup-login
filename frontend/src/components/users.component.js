import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {data} from "../data"

const DatatablePage = () => {

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;