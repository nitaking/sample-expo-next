// @generated: @expo/next-adapter@2.1.0
import React from 'react';
import {useMediaQuery} from "react-responsive";
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Link} from "expo-next-react-navigation";
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Nita from "./nita";


const AppNavigator = createStackNavigator({
    '/': App,
    nita: Nita,
})

export default createAppContainer(AppNavigator)

function Header({style = null, ...props}) {
    return (
        <Text
            accessibilityLabel="header"
            style={[
                {
                    fontWeight: "bold",
                    marginBottom: 24,
                    fontSize: Platform.select({web: "2.25rem", default: `${2.25 * 16}`})
                },
                style
            ]}
            {...props}
        />
    );
}

function App() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1224px)"
    });
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

            <View style={{ margin: 40 }}>
                <Link style={{ backgroundColor: 'yellow' }} routeName="nita">
                    <Text style={{ marginVertical: 20 }}>Button</Text>
                </Link>
                {isDesktopOrLaptop && (
                    <Link style={{ backgroundColor: 'pink' }} routeName="nita">
                        <Text style={{ marginVertical: 20 }}>DESKTOP!! or LAPTOP!!</Text>
                        {isBigScreen && <Text style={{ marginVertical: 20 }}>BIG screen!!!</Text>}
                        {isTabletOrMobile && <Text style={{ marginVertical: 20 }}>TABLET!! or MOBILE!!</Text>}
                    </Link>
                )}
                {isTabletOrMobileDevice && <Text>You are a tablet or mobile phone</Text>}
                <Text style={{ marginVertical: 20 }}>
                    Your are in {isPortrait ? "portrait" : "landscape"} orientation
                </Text>
                {isRetina && <Text>You are retina</Text>}
            </View>

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


function Route() {
    return (
        <NavigationContainer>
            <PageNavigator />
        </NavigationContainer>
    );
}
