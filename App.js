import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import PaperComponent from './src/screens/PaperComponent/PaperComponent';
import FacebookClone from './src/screens/FacebookClone/FacebookClone';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <PaperComponent/> */}
      <FacebookClone/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EACCDB',
  },
});

export default App;


