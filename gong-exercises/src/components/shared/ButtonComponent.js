import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.css';

class ButtonComponent extends Component {
    render() {
        return (
            <button className={this.props.class} onClick={this.props.onClick}>
                {this.props.src ? <img src={this.props.src} width="25" alt={this.props.title}/> : null}
                <span>{this.props.title}</span>

            </button>
        );
    }
}

ButtonComponent.propTypes = {
    src: PropTypes.string,
    onClick: PropTypes.func
};

ButtonComponent.defaulpropTypes = {
    title: '',
    src: '',
    onClick: () => {},
};

export default ButtonComponent;