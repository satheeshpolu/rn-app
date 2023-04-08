import React, { useState } from 'react';
import { Provider, DefaultTheme, Text } from 'react-native-paper';
import SplashScreen from './screens/splash';
import HomeScreen from './screens/home';
const App = (): JSX.Element => {
    const [isAppLoading, setAppLoading] = useState(true);
    setTimeout(() => setAppLoading(false), 2000);
    return (
        <Provider theme={DefaultTheme}>
            {isAppLoading ? <SplashScreen></SplashScreen> : <HomeScreen></HomeScreen>}
        </Provider>
    );
}

export default App;
