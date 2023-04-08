import React from 'react';
import { Provider, DefaultTheme, Text } from 'react-native-paper';
const App = (): JSX.Element => {
    return (
        <Provider theme={DefaultTheme}>
            <Text>React native mobile app.</Text>
        </Provider>
    );
}

export default App;
