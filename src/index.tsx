import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import SplashScreen from './screens/splash';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import NoteScreen from './screens/notes';
import ProfileScreen from './screens/profile';
import NoteDetailsScreen from './screens/notes/note-details';
const App = (): JSX.Element => {
  const [isAppLoading, setAppLoading] = useState(true);
  setTimeout(() => setAppLoading(false), 2000);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={isAppLoading ? SplashScreen : HomeScreen}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ title: 'Login'}}
        />
        <Stack.Screen
          name="Note"
          component={NoteScreen}
          options={{ title: 'Notes'}}
        />
        <Stack.Screen
          name="NoteDetails"
          component={NoteDetailsScreen}
          options={{ title: 'Note Detail'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
