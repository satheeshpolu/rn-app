import React, { useState } from 'react';
import { Keyboard, Text, View } from 'react-native';

import { NavigationProp, useRoute } from '@react-navigation/native';
import { Button, TextInput, List } from 'react-native-paper';
import styles from './styles';
import { formtDate } from '../../../utils/utils';
import CustomDialog from '../../../atoms/custom-confirm-dialog';
import axios from 'axios';
import { BE_SERVER_URL, BE_SERVER_PORT, API_VERSION } from '@env';
import { API_ENDPOINT } from '../../../utils/api_constant/api';
import CustomSnackbar from '../../../atoms/custom-snackbar';

type ComponentProps = {
  navigation: NavigationProp<any, any>;
};

const NoteDetailsScreen = ({ navigation }: ComponentProps): JSX.Element => {
  const route = useRoute();
  let noteDetails = route?.params;
  const [showEditDialog, setEditDialog] = useState(false);
  const [showUpdateCTA, setUpdateCTA] = useState(false);
  const [title, setTitle] = useState(noteDetails?.note_title);
  const [desc, setDesc] = useState(noteDetails?.note_description);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [latestNotes, setLatestNotes] = useState(noteDetails);
  
  const onEditConfirm = () => {
    setEditDialog(false);
    setUpdateCTA(true);
    console.log('OnEditConfirmed...!');
  };

  const onCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const onCloseErrorMsg = () => {
    setShowErrorMsg(false);
  };
  const updateNote = async () => {
    if (!title && !desc) {
      Keyboard.dismiss();
      setShowErrorMsg(true);
      return;
    }
    console.log('noteDetails => updateNote', title, desc);

    setShowErrorMsg(false);
    // resetForm();
    // Keyboard.dismiss();
    try {
      await axios
      .put(
        `${BE_SERVER_URL}:${BE_SERVER_PORT}/${API_VERSION}${API_ENDPOINT.UPDATE_NOTE}`,
        {
          note_id: noteDetails?.note_id,
          note_title: title,
          note_description: desc,
        },
      )
      .then(function (response) {
        noteDetails = response?.data?.result?.recordset[0];
        console.log('noteDetails => ', noteDetails, route?.params);
        setLatestNotes(response?.data?.result?.recordset[0]);
        setUpdateCTA(false);
        setShowSnackbar(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log('updateNote =. ', error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <List.Item
          title="Id"
          right={props => <Text>{latestNotes?.note_id}</Text>}
        />
        <List.Item
          title="Title"
          right={props =>
            !showUpdateCTA ? (
              <Text>{latestNotes?.note_title}</Text>
            ) : (
              <TextInput value={title} onChangeText={text => setTitle(text)} />
            )
          }
        />
        <List.Item
          title="Description"
          right={props =>
            !showUpdateCTA ? (
              <Text>{latestNotes?.note_description}</Text>
            ) : (
              <TextInput value={desc} onChangeText={text => setDesc(text)} />
            )
          }
        />
        <List.Item
          title="Created at"
          right={props => <Text>{formtDate(latestNotes?.created_at)}</Text>}
        />
        <List.Item
          title="Updated at"
          right={props => <Text>{formtDate(latestNotes?.updated_at)}</Text>}
        />
        {!showUpdateCTA && (
          <Button
            icon="account-edit-outline"
            mode="contained-tonal"
            contentStyle={{ flexDirection: 'row-reverse' }}
            onPress={() => setEditDialog(true)}>
            Update Note
          </Button>
        )}

        {showUpdateCTA && (
          <Button
            icon="account-edit-outline"
            mode="contained-tonal"
            contentStyle={{ flexDirection: 'row-reverse' }}
            onPress={() => updateNote()}>
            Update Note
          </Button>
        )}
        {showEditDialog && (
          <CustomDialog
            title={'Are you sure you want to update note?'}
            type="editProfile"
            onConfirm={() => onEditConfirm()}
            onClose={() => setEditDialog(false)}
          />
        )}
      </View>
      {showSnackbar && (
        <CustomSnackbar
          title="Note is updated scuccessfully."
          onClose={onCloseSnackbar}
        />
      )}
      {showErrorMsg && (
        <CustomSnackbar title="Provide note info." onClose={onCloseErrorMsg} />
      )}
    </>
  );
};

export default NoteDetailsScreen;
