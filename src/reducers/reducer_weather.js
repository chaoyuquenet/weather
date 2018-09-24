//use of case type FETCH_WEATHER in actions index
import { FETCH_WEATHER } from '../actions/index';

export default function(state= [], action) {
  //console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.contact ([action.payload.data]); is the same as below
      // [city, city, city] NOT [city,[city,city]]
      return [ action.payload.data, ...state];
  }
  return state;
}
