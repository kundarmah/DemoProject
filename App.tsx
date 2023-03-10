import React, {FunctionComponent} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

const App: FunctionComponent = () => {
  const onPressStarted = () => {
    Alert.alert('STARTED');
    console.log('STARTED');
  };

  const onPressSkipped = () => {
    Alert.alert('SKIPPED');
    console.log('SKIPPED');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.car}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('./src/assets/car.png')}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.carousel}>
            <View style={[styles.point, styles.circleSelected]} />
            <View style={[styles.point]} />
            <View style={[styles.point]} />
          </View>
          <Text style={[styles.title]}>Find the car you want</Text>
          <Text style={[styles.text]}>
            When the top slides down, the possibilities open up. Enjoy sporty
            enhancements, intelligent technology
          </Text>
          <TouchableOpacity
            onPress={onPressStarted}
            style={[styles.button, styles.filled]}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSkipped} style={[styles.button]}>
            <Text style={[styles.btnText, styles.btnTextDark]}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  car: {
    flex: 3,
    backgroundColor: 'black',
  },
  card: {
    flex: 2,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  carousel: {
    margin: 4,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  circleSelected: {
    backgroundColor: 'blue',
  },
  content: {
    width: '65%',
    marginTop: 20,
  },
  point: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
    margin: 2,
  },
  title: {
    color: '#343434',
    fontSize: 24,
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#848484',
    fontSize: 18,
    textAlign: 'left',
    paddingBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
    color: 'white',
    marginBottom: 2,
  },
  filled: {
    backgroundColor: '#013769',
  },
  btnText: {
    color: 'white',
  },
  btnTextDark: {
    color: '#013769',
  },
});

export default App;
