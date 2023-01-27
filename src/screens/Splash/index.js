import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import Button from "../../components/Button";
import styles from "./styles";

const Splash = ({ navigation }) => { // Navigate to main scrreen 
    return (
        <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                <Text style={styles.title}>100K+ Premium Recipe</Text>
                <Text style={styles.title}>For Rookies</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.bigTitle}>Get</Text>
                <Text style={styles.bigTitle}>Cooking</Text>
                <Text style={styles.subtitle}>Simple way to find Tasty Recipe</Text>

                
                <Button onPress={() => navigation.navigate('Home')}>Find Recipes</Button> 
            </View>
        </ImageBackground>
    )
}

export default React.memo(Splash);