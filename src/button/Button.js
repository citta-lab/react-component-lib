import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => <button type="submit">{text}</button>;


Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.deaultProps = {
  text: 'Defaul',
};

export default Button;
