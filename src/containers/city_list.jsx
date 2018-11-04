import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import City from './city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderCities = () => {
    return (
      <ul className="list-group">{this.props.cities.map(city => <City city={city} key={city.slug} />)}</ul>
    );
  }

  render() {
    return (
      <div className="cities">
        {this.renderCities()}
      </div>
    );
  }
}

import { setCities } from '../actions/index.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
