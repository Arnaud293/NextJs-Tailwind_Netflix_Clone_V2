import React, { useEffect, useState } from 'react';

import { HomeRequests } from '../constants';
import Row from './Row';

type Props = {}

const Rows:React.FC = ({}: Props) => {

  return (
    <div>
      {HomeRequests.map((row, index) => (
        <Row key={index} fetchUrl={row.fetchUrl} title={row.title} />
      ))}
    </div>
  )
}

export default Rows