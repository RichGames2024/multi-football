import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const App = () => {
  return (
    <LinearGradient
      colors={['#0E2B14', '#2B9943', '#269251', '#E1FDA6', '#CCDEB4']}
      style={styles.container}
      locations={[0.05, 0.32, 0.53, 0.88, 1]}>
      <View style={styles.rewardContainer}>
        <Text style={styles.rewardText}>Günlük Ödül</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.gameText}>Strateji</Text>
        <Text style={styles.gameText}>Eğlence</Text>
      </View>
      <View style={styles.createRoomContainer}>
        <Text style={styles.createRoomText}>Siktik diye yorumladım</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
  rewardContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  rewardText: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  middleSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  gameText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  createRoomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  createRoomText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
