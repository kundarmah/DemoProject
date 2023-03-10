import React from 'react';
import {StyleSheet} from 'react-native';
import Button from '.';

interface ListProps {
  data: [ItemProps];
}

interface ItemProps {
  label: string;
  color: string;
}

const List = ({data}: ListProps) => {
  return (
    <>
      {data.map((item: ItemProps) => (
        <Button kahitAno={item.label} color={item.color} />
      ))}
    </>
  );
};

export default List;

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
