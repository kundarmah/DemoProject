import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  kahitAno: string;
  color: any;
  setColor?: any;
}

const Button = ({kahitAno, color, setColor}: ButtonProps) => {
  const onChangePress = num => {
    setColor('orange');
  };

  return (
    <TouchableOpacity
      onPress={() => onChangePress('1')}
      style={[styles.button, {backgroundColor: color}]}>
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
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
