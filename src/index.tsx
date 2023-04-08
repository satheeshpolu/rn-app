import React from 'react';
import { Provider, DefaultTheme, Text } from 'react-native-paper';
import SplashScreen from './screens/splash';
const App = (): JSX.Element => {
    return (
        <Provider theme={DefaultTheme}>
            <SplashScreen />
        </Provider>
    );
}

export default App;
