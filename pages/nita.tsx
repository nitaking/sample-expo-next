// @generated: @expo/next-adapter@2.1.0
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export default function Nita() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Name is Nita 👋</Text>
            <Text style={styles.text}>{Dimensions.get('window').width}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
});
