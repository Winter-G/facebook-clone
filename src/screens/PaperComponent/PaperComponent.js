import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Button, Avatar, Divider } from 'react-native-paper';

const PaperComponent = () => {
  const handlePress = () => {
    console.log('Button Pressed');
  };

  return (
    <View>
        <Text>PaperComponent</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>

      <Divider style={styles.divider} />

      <Avatar.Image size={64} source={require('../../assets/avatar_img.jpg')} />

    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
    width: '80%',
  },
});

export default PaperComponent;
