import { Text } from 'react-native';
import propTypes from 'prop-types';

const Button = ({ title }) => {
  return <Text>{title}</Text>;
};

Button.defaultProps = {
  title: 'Default',
};

Button.propTypes = {
  title: propTypes.string.isRequired,
};

export default Button;
