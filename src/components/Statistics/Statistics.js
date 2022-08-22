import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics(props) {

  function propNameNormalize(string) {
    return (
      string[0].toUpperCase() +
      `${[...string]
        .map(letter =>
          letter === letter.toUpperCase() ? ` ${letter.toLowerCase()}` : letter
        )
        .join('')}`.slice(1)
    );
  }

  return (
    <ul>
      {Object.keys(props).map((propName, i) => (
        <li key={i} className={s.item}>
          {propNameNormalize(propName)}: {props[propName]}
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};