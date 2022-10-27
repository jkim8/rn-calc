import { Pressable, Text } from 'react-native';
import propTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <Pressable
      onPressIn={() => console.log('in')}
      onPressOut={() => console.log('Out')}
      onPress={() => console.log('click!!')}
      style={({ pressed }) => {
        return [
          { backgroundColor: 'red' },
          pressed && { backgroundColor: 'orange', opacity: 0.3 },
        ];
      }}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  title: 'Default', //해당 props에 값을 전달 하지 않았을 때 default로 지정되는 값
};

Button.propTypes = {
  title: propTypes.string.isRequired,
};

export default Button;
