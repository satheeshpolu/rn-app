import React from 'react';
import { Button, View } from 'react-native';

import styles from './styles';
import { NavigationScreenProp } from 'react-navigation';
import { TextInput } from 'react-native-paper';
import axios from 'axios';

type ScreenProps = {
  navigation: NavigationScreenProp<any, any>;
};

const LoginScreen = ({ navigation }: ScreenProps) => {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');

  const saveNotes = async () => {
    await axios
      .post('api/v1/add-note', {
        note_title: title,
        note_description: desc,
      })
      .then(function (response) {
        console.log('res => ', response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <TextInput
        label="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        label="Description"
        value={desc}
        onChangeText={text => setDesc(text)}
      />
      <Button title="Save Notes" onPress={saveNotes} />
    </View>
  );
};

export default LoginScreen;
