import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const city = this.props.activeCity;

    if (city === null) {
      return <div />;
    }

    const imageUrl = `https://kitt.lewagon.com/placeholder/cities/${city.slug}`;

    return (
      <div className="active-city">
        <h3>{city.name}</h3>
        <p>{city.address}</p>
        <img src={imageUrl} alt="" width="100%" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

export default connect(mapStateToProps, null)(ActiveCity);
