// @generated: @expo/next-adapter@2.1.0
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Nita() {

    const [res, setRes] = useState('');
    const [res2, setRes2] = useState('');

    useEffect(() => {

        const f = async () => {
            await new Promise(r => setTimeout(r, 1000));
            const response = await fetch(`http://localhost:3000/api/hello`);
            const data = await response.json();
            setRes(JSON.stringify(data))

            const response2 = await fetch(`http://localhost:3000/api/hello/1`);
            const data2 = await response2.json();
            setRes2(JSON.stringify(data2))
            console.log(data);
        };
        f();
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Name is Nita 👋</Text>
            <Text style={styles.text}>{' '}</Text>
            <Text style={styles.text}>{res}</Text>
            <Text style={styles.text}>{' '}</Text>
            <Text style={styles.text}>{res2}</Text>
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
