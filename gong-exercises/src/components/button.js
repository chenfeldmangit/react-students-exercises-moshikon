import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/mainT.css';

class ButtonComponent extends Component {
    render() {
        return (
            <div className="tweeter-default-button">
                <img src={this.props.src} width="25" alt={this.props.title}/>
                <span>{this.props.title}</span>
            </div>
        );
    }
}

ButtonComponent.propTypes = {
    src: PropTypes.string.isRequired,
};

ButtonComponent.defaulpropTypes = {
    title: '',
};

export default ButtonComponent;