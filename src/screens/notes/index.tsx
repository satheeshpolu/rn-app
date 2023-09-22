import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import { NavigationScreenProp } from 'react-navigation';
import { Button, TextInput, Divider, Card, Snackbar } from 'react-native-paper';
import axios from 'axios';
import CustomCard from '../../atoms/custom-card';
import { BE_SERVER_URL, BE_SERVER_PORT, API_VERSION } from "@env";
import { API_ENDPOINT } from '../../utils/api_constant/api';

type ScreenProps = {
  navigation: NavigationScreenProp<any, any>;
};

const NoteScreen = ({ navigation }: ScreenProps): JSX.Element => {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [allNotes, setAllNotes] = React.useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const saveNotes = async () => {
    await axios
      .post(`${BE_SERVER_URL}:${BE_SERVER_PORT}/${API_VERSION}${API_ENDPOINT.ADD_NOTE}`, {
        note_title: title,
        note_description: desc,
      })
      .then(function (response) {
        getAllNotes();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const resetForm = () => {
    setTitle('');
    setDesc('');
  };

  const getAllNotes = async () => {
    await axios
      .get(`${BE_SERVER_URL}:${BE_SERVER_PORT}/${API_VERSION}${API_ENDPOINT.GET_ALL_NOTES}`)
      .then(function (response) {
        setAllNotes(response?.data?.result);
        resetForm();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formSection}>
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
        <Button icon="content-save" mode="contained" onPress={saveNotes}>
          {'Save Note'}
        </Button>
      </View>
      
      <View style={styles.noteSection}>
        <Divider bold={true} />
        <ScrollView>{allNotes?.map((note, index) => 
          <CustomCard data={note} key={index}/> )}
        </ScrollView>
      </View>
    </View>
  );
};

export default NoteScreen;
