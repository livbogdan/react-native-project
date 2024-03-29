import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { getRecipesList } from './src/http';
import Splash from './src/screens/Splash';
import Search from './src/screens/Search';
import Home from './src/screens/Home';
import RecipeDetails from './src/screens/RecipeDetails';
import colors from './src/constants/colors';

export const RecipesContext = React.createContext();
export const HealthyRecipesContext = React.createContext();

const Stack = createStackNavigator();
{/* Button for previews screen (available only on header */} 
const BackButton = (props) => { 
  return (
    <Pressable onPress={props.onPress}>
      <Image style={styles.back} source={require('./assets/arrowleft.png')} /> 
    </Pressable>
  )
}
{/* Application theme*/}
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.primary,
  },
}

export default function App() {
  const [recipes, setRecipes] = useState([]); // Show all Recipes 
  const [healthyRecipes, setHealthyRecipes] = useState([]); 
  // Show Recipes with "healthy" Tag 

  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch(null, '15')
      setRecipes(rec)
      const healthyRec = await handleRecipesFetch('healthy', '5')
      setHealthyRecipes(healthyRec)
    })()
  }, [])

  {/*Fetching recipe by tag (healthy)*/}
  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList(tags, size)
      return recipes?.data?.results; // 
    } catch (e) {
      console.log('error fetching recipes :>> ', e); // Write in console if recipes cant found
    }
  }

  return (
    <HealthyRecipesContext.Provider value={{ healthyRecipes, setHealthyRecipes }}>
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: true }}>
            {/* Screen with Image Background and one button as navigated to next screen*/}
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />  
            {/* Main Screen with availble recipe by Fetching tag, tags and searchbar */}
            <Stack.Screen name="Home" component={Home} options={{ headerLeft: null, gestureEnabled: false }} />  
            {/* Search Screen shows when pressing on searchbar in home screen. there i contains all recipe */}
            <Stack.Screen name="Search" component={Search} options={{ headerLeft: (props) => <BackButton {...props} /> }} />
            {/* Search Screen shows when pressing on searchbar in home screen. there i contains all recipe */}
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ headerLeft: (props) => <BackButton {...props} />, title: "Recipe" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    margin: 16,
  },
});
