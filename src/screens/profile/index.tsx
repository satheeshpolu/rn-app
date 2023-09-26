import React, { useState } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import { Button, Divider, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDialog from '../../atoms/custom-confirm-dialog';

type ComponentProps = {
  navigation: NavigationProp<any, any>;
};

const ProfileScreen = ({ navigation }: ComponentProps): JSX.Element => {
  const [showEditDialog, setEditDialog] = useState(false);
  const [showSignOutDialog, setSignOutDialog] = useState(false);

  const sendTo = () => {
    navigation.navigate('Note');
  };

  const sendToLogin = () => {
    navigation.navigate('Login');
  };

  const onSignOutConfirm = () => {
    setSignOutDialog(false);
    console.log('OnSignOutConfirmed...!');
  };

  const onEditConfirm = () => {
    setEditDialog(false);
    console.log('OnEditConfirmed...!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="account-circle-outline" size={64} />
      </View>
      <View style={styles.body}>
        <List.Item title="Title" right={props => <Text>{'Mr.'}</Text>} />
        <List.Item
          title="First Name"
          right={props => <Text>{'Item description'}</Text>}
        />
        <List.Item
          title="Last Name"
          right={props => <Text>{'Item description'}</Text>}
        />
        <List.Item
          title="Email"
          right={props => <Text>{'test@test.com'}</Text>}
        />
        <List.Item
          title="Mobile"
          right={props => <Text>{'+49 123 456 789'}</Text>}
        />
      </View>
      <Divider />
      <View style={styles.footer}>
        <Button
          icon="account-edit-outline"
          mode="contained-tonal"
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={() => setEditDialog(true)}>
          Eidt Profile
        </Button>
        <Button
          icon="arrow-right"
          mode="contained-tonal"
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={() => setSignOutDialog(true)}>
          Sign Out
        </Button>
      </View>
      {showEditDialog && (
        <CustomDialog
          title={'Are you sure you want to edit your profile?'}
          type="editProfile"
          onConfirm={() => onEditConfirm()}
          onClose={() => setEditDialog(false)}
        />
      )}
      {showSignOutDialog && (
        <CustomDialog
          title={'Are you sure you want to sign out?'}
          type="signOut"
          onConfirm={() => onSignOutConfirm()}
          onClose={() => setSignOutDialog(false)}
        />
      )}
    </View>
  );
};

export default ProfileScreen;
