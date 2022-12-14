import React from "react";
import s from "./FeedbackOptions.module.css";
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => (
        <li key={option} className={s.item}>
          <button
            className={s.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};