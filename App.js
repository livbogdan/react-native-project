import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: { 
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

const BackButton = (props) => { 
  console.log("props :>>", props) 

  return (
    <Pressable onPress={props.onPress}>
      <Image 
        style={styles.back} 
        source={require("./assets/arrowleft.png")}/>
    </Pressable>
   )
  }

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerTitleAlign: "center", headerShadowVisible: false}}>
        <Stack.Screen 
                      name='Splash' 
                      component={Splash} 
                      options={{headerShown: false}}/>
        <Stack.Screen 
                      name='Home' 
                      component={Home} 
                      options={{headerLeft: null, gestureEnabled: false}} />
        <Stack.Screen 
                      name='Search' 
                      component={Search} 
                      options={{headerLeft: (props) => <BackButton {...props} />}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  back:
  {
    width: 25,
    height: 25,
    margin: 16
  }
})