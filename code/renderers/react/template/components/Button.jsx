import React from 'react';

/**
 * Primary UI component for user interaction
 * @param {object} props
 * @param {string} props.label
 * @param {function} props.onClick
 */
export const Button = ({ onClick, label }) => (
  <button type="button" onClick={onClick}>
    {label}
  </button>
);
