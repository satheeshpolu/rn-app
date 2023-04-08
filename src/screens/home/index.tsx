import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import styles from './styles';

const HomeScreen = (): JSX.Element => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;