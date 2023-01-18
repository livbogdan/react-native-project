import "react-native-gesture-handler";
import React, {useEffect, useState} from 'react';
import { Image, Pressable, StyleSheet} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { getRecipesList  } from "./src/http";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import colors from './src/constants/colors';

const Stack = createStackNavigator();
export const GamesContext= React.createContext()
export const HealthGamesContext= React.createContext()

const theme = {
  ...DefaultTheme,
  colors: { 
    ...DefaultTheme.colors,
    background: colors.primary,
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
  const [healthGames, setHealthyRecipes] = useState([]);
  const [games, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch(null, '15')
      setRecipes(rec)
      const healthyRec = await handleRecipesFetch('healthy', '5')
      setHealthyRecipes(healthyRec)
    })()
  }, [])

  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList (tags, size)
      return recipes?.data?.results;
    } catch (e) {
      console.log('error Fetching recipes :>> ', e);
    }
  }

  return (
    <HealthGamesContext.Provider value = {{healthGames, setHealthyRecipes}} >
      <GamesContext.Provider value={{games, setRecipes}}>
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
      </GamesContext.Provider>
    </HealthGamesContext.Provider>
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