// @generated: @expo/next-adapter@2.1.0
import React from 'react';
import {useMediaQuery} from "react-responsive";
import {Platform, StyleSheet, Text, View} from 'react-native';

function Header({style, ...props} = {}) {
    return (
        <Text
            accessibilityLabel="header"
            style={[
                {
                    fontWeight: "bold",
                    marginBottom: 24,
                    fontSize: Platform.select({web: "2.25rem", default: 2.25 * 16})
                },
                style
            ]}
            {...props}
        />
    );
}

export default function App() {
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-device-width: 1224px)" });
    const isBigScreen = useMediaQuery({query: "(min-device-width: 1824px)"});
    const isTabletOrMobile = useMediaQuery({query: "(max-width: 1224px)"});
    const isTabletOrMobileDevice = useMediaQuery({
        query: "(max-device-width: 1224px)"
    });
    const isPortrait = useMediaQuery({query: "(orientation: portrait)"});
    const isRetina = useMediaQuery({query: "(min-resolution: 2dppx)"});

    return (
        <View style={styles.container}>
            <Header>Device Test!</Header>


            <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>

            {isDesktopOrLaptop 	&& <Text>IS DESKTOP!!!</Text>}
            {isTabletOrMobile 	&& <Text>IS MOBILE OR TABLET!!!</Text>}
            {isBigScreen 		&& <Text>IS BIG!!!</Text>}
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
        marginBottom: 10,
    },
});
