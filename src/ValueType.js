import React, { PropTypes } from 'react';
import { valueAsType, JSONtypes } from './utils/typeCasting';

export const ValueType = props => {

  let nodeTypes = JSONtypes.map( type =>  <option value={type}>{type}</option> );

  return <select value={props.nodeType} onChange={props.updateNodeType} >{nodeTypes}</select>;
};
