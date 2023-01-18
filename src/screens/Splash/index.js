import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import Button from "../../components/Button";
import styles from "./styles";

const Splash = ({navigation}) => {

    return(

    <ImageBackground style={styles.background} source={require("../../../assets/splashscreen.png")}>
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/logo.png")} />
            <Text style={styles.title}> TITLE </Text>
        </View>

        <View style={styles.container}>
            <Text style={styles.bigTitle}>Start</Text>
            <Text style={styles.bigTitle}>Watch</Text>
            <Text style={styles.subtitle}> subtitle </Text>
            <Button onPress={()=> navigation.navigate("Home")} >Get Started</Button>
        </View>
    </ImageBackground>
    )
}

export default React.memo(Splash);