import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}

/*
{120},{180} is pixel value, change the value to be bigger or smaller
<Sparklines height={120} width={180} data={temps}>
{temps} doesn't exist here, replace with {props.data}
make color availabe as a level of configuration,
say {props.color} not "red"
*/
