import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ButtonProps {
  kahitAno: string;
  color: any;
  setColor?: any;
}

const Button = ({kahitAno, color, setColor}: ButtonProps) => {
  const onChangePress = () => {
    setColor('orange');
  };

  return (
    <TouchableOpacity
      onPress={() => onChangePress()}
      style={[styles.button, {backgroundColor: color}]}>
      <Icon name="glass" size={30} color="white" />
      <Text style={styles.text}>{kahitAno}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    margin: 10,
    width: '50%',
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
