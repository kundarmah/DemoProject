import React, {FunctionComponent} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import List from './src/components/List';

const App: FunctionComponent = () => {
  const data = [
    {label: '1', color: 'red'},
    {label: '2', color: 'green'},
    {label: '3', color: 'blue'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <List data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  num: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  flatlist: {flex: 1, width: '100%', borderWidth: 1},
});

export default App;
