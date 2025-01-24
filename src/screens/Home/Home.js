import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Modal,
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const DATA = [
  { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'First Item' },
  { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Second Item' },
  { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Third Item' },
  { id: 'a1c5bb72-e5d9-4f3e-bc5e-8d351e5374c4', title: 'Fourth Item' },
  { id: 'c04abca4-3d2e-4f5f-bf5a-df4c6ad7a87b', title: 'Fifth Item' },
  { id: 'd83519fa-8308-4b89-b2b9-306cd9d62b13', title: 'Sixth Item' },
  { id: 'f497c704-6870-42c2-b6e5-bbaf5f7d20a9', title: 'Seventh Item' },
  { id: '74589a65-b2d1-4b7a-b8b7-3d4028fd0c2d', title: 'Eighth Item' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (message) => {
    Alert.alert(message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subtitle}>Winter!</Text>
            <Text style={styles.description}>First React Native Project</Text>

            <Button
              title="Press Me"
              color="#6b0035"
              onPress={() => handlePress('Button pressed')}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress('TouchableOpacity pressed')}>
              <Text style={styles.buttonText}>Press Here</Text>
            </TouchableOpacity>

            <TouchableHighlight
              style={styles.button}
              underlayColor="#DDDDDD"
              onPress={() => handlePress('TouchableHighlight pressed')}>
              <Text style={styles.buttonText}>Press Me!</Text>
            </TouchableHighlight>

            <Image
              style={styles.image}
              source={require('../../assets/img.jpg')}
              resizeMode="contain"
            />

            {/* Input Section */}
            <TextInput
              style={styles.input}
              placeholder="Enter username"
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              secureTextEntry
              keyboardType="default"
            />

            {/* FlatList Section */}
            <FlatList
              style={styles.list}
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled
            />

            {/* Modal Section */}
            <Modal
              animationType="slide"
              transparent
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}>
              <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello Winter!</Text>
                  <Pressable
                    style={[styles.button, styles.closeButton]}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.buttonText}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <Pressable
              style={[styles.button, styles.openButton]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Show Modal</Text>
            </Pressable>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EACCDB',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontWeight: '700',
    color: '#99004D',
    fontSize: 24,
  },
  subtitle: {
    fontWeight: '600',
    color: '#99004D',
    fontSize: 20,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  button: {
    backgroundColor: 'plum',
    padding: 15,
    margin: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  list: {
    height: 90,
  },
  item: {
    padding: 10,
    backgroundColor: 'plum',
    borderBottomWidth: 3,
    borderBottomColor: '#DDD',
  },
  itemText: {
    color: '#FFF',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#ff5c5c',
  },
  openButton: {
    backgroundColor: '#5cb85c',
  },
});

export default Home;