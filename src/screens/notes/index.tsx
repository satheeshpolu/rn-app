import React, { useEffect } from 'react';
import { View, ScrollView, Keyboard } from 'react-native';

import styles from './styles';
import { NavigationScreenProp } from 'react-navigation';
import {
  Button,
  TextInput,
  Divider,
  Card,
  Snackbar,
  Text,
} from 'react-native-paper';
import axios from 'axios';
import CustomCard from '../../atoms/custom-card';
import { BE_SERVER_URL, BE_SERVER_PORT, API_VERSION } from '@env';
import { API_ENDPOINT } from '../../utils/api_constant/api';
import CustomSnackbar from '../../atoms/custom-snackbar';

type ScreenProps = {
  navigation: NavigationScreenProp<any, any>;
};

const NoteScreen = ({ navigation }: ScreenProps): JSX.Element => {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [allNotes, setAllNotes] = React.useState([]);
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  useEffect(() => {
    getAllNotes();
  }, []);

  const saveNotes = async () => {
    if (!title && !desc) {
      setShowSnackbar(true);
      return;
    }
    resetForm();
    Keyboard.dismiss();
    await axios
      .post(
        `${BE_SERVER_URL}:${BE_SERVER_PORT}/${API_VERSION}${API_ENDPOINT.ADD_NOTE}`,
        {
          note_title: title,
          note_description: desc,
        },
      )
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
    setShowSnackbar(false);
  };

  const getAllNotes = async () => {
    await axios
      .get(
        `${BE_SERVER_URL}:${BE_SERVER_PORT}/${API_VERSION}${API_ENDPOINT.GET_ALL_NOTES}`,
      )
      .then(function (response) {
        setAllNotes(response?.data?.result);
        resetForm();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onCloseSnackbar = () => {
    setShowSnackbar(false);
  };
  return (
    <>
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
          <ScrollView>
            {allNotes?.map((note, index) => (
              <CustomCard data={note} key={index} />
            ))}
          </ScrollView>
          {allNotes.length === 0 && (
            <Text style={styles.emptyMsg}>
              {'Notes are empty, add new note.'}
            </Text>
          )}
        </View>
      </View>
      {showSnackbar && (
        <CustomSnackbar
          title="Provide note info."
          onClose={onCloseSnackbar}
        />
      )}
    </>
  );
};

export default NoteScreen;
