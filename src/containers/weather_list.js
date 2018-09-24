import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

//list that shows all different cities
//this list is a html table
class WeatherList extends Component {
  //render a single city a single row
  renderWeather(cityData) {
    const name = cityData.city.name;
    //map temperatrue for 5 each day
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    /*
    convert temps unit K to Celsius
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    */

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="red" units="K" /></td>
        <td><Chart data={pressures} color="orange" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/*
function mapStateToProps(state) {
  return { weather: state.weather };
}
*/

//simplify code with ES6 syntax as below
//argument (state) is the same as state.weather, so delete state, use {weather} as argument
//{weather:weather},key is the same as value, so just write one { weather }
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
