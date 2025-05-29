import React, { useEffect, useState } from 'react';
import { View, ScrollView, Keyboard, TouchableOpacity } from 'react-native';

import styles from './styles';
import { NavigationScreenProp } from 'react-navigation';
import {
  Button,
  TextInput,
  Divider,
  Card,
  Snackbar,
  Text,
  Searchbar,
  Avatar,
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
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [allNotes, setAllNotes] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [noteNotFoundMsg, setNoteNotFoundMsg] = useState(false);
  const [showNoteForm, setShowNoteForm] = useState(false);

  // Search feature
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query === '') {
      Keyboard.dismiss();
      setNoteNotFoundMsg(false);
      getAllNotes();
    }
    if (query.length < 1) return;
    const copyArStr = JSON.stringify(allNotes);
    const copyAr = JSON.parse(copyArStr);
    const newAllNotes = copyAr.filter(note => {
      const _title = note?.note_title.toLowerCase();
      return _title.indexOf(query) > -1;
    });
    if (newAllNotes.length > 0) {
      setNoteNotFoundMsg(false);
      // sortDataByDate();
      setAllNotes(newAllNotes);
    } else {
      setNoteNotFoundMsg(true);
      setAllNotes([]);
    }
  };

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
    setShowNoteForm(false);
  };

  const goToNoteDetails = (data: object) => {
    navigation.navigate('NoteDetails', data);
  };

  const getAllNotes = async () => {
    await axios
      .get(
        `${BE_SERVER_URL}:${BE_SERVER_PORT}/${API_VERSION}${API_ENDPOINT.GET_ALL_NOTES}`,
      )
      .then(function (response) {
        console.log("getAllNotes response====>", response?.data);

        sortDataByDate(response?.data?.result);
        setAllNotes(response?.data?.result);
        resetForm();
      })
      .catch(function (error) {
        console.log(error, "got Error====>");
      });
  };

  const onCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const sortDataByDate = data => {
    return data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  };

  const deleteNote = async (id: number) => {
    try {
      await axios
      .delete(
        `${BE_SERVER_URL}:${BE_SERVER_PORT}/${API_VERSION}${API_ENDPOINT.DELETE_NOTE}`,
        {
          data: { note_id: id }
        },
      )
      .then(function (response) {
        getAllNotes();
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log('deleteNote => ', error);
    }
  };

  const refreshData = () => {
    getAllNotes();
  };
  return (
    <>
      <View style={styles.container}>
        {showNoteForm && (
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
              multiline={true}
            />
            <Button icon="content-save" mode="contained" onPress={saveNotes}>
              {'Save Note'}
            </Button>
          </View>
        )}
        <View style={styles.noteSection}>
          <View style={styles.listContainer}>
            <View style={styles.searchBar}>
              <View style={styles.touchableOpacity}>
                <TouchableOpacity onPress={() => refreshData()}>
                  <Avatar.Icon size={48} icon="refresh" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowNoteForm(!showNoteForm)}>
                  <Avatar.Icon
                    size={48}
                    icon={!showNoteForm ? 'plus' : 'minus'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Divider bold={true} />
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            {noteNotFoundMsg && (
              <Text style={styles.emptyMsg}>{'Did not find any note.'}</Text>
            )}
            <ScrollView>
              {allNotes?.map((note, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => goToNoteDetails(note)}>
                  <CustomCard
                    data={note}
                    key={index}
                    onConfirm={() => deleteNote(note?.note_id)}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
      {allNotes.length === 0 && (
        <Text style={styles.emptyMsg}>{'Notes are empty, add new note.'}</Text>
      )}
      {showSnackbar && (
        <CustomSnackbar title="Provide note info." onClose={onCloseSnackbar} />
      )}
    </>
  );
};

export default NoteScreen;
