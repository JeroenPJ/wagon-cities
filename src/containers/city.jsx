import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    const city = this.props.city;
    return (
      <li className="list-group-item" onClick={this.handleClick}>{city.name}</li>
    );
  }
}

import { setActiveCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
