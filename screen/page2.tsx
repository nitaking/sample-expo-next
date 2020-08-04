import React from "react";
import {Button, View, StyleSheet, Text} from "react-native";
import {useRouting} from "expo-next-react-navigation";

export function Page2() {
    const { goBack } = useRouting()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile! 🏋️‍♀️</Text>
            <Button text="👈 Go back" onPress={() => goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        margin: 20,
    },
})
