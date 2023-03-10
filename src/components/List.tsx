import React from 'react';
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
