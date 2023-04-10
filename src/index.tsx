import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import SplashScreen from './screens/splash';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
const App = (): JSX.Element => {
  const [isAppLoading, setAppLoading] = useState(true);
  setTimeout(() => setAppLoading(false), 2000);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={isAppLoading ? SplashScreen : HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
