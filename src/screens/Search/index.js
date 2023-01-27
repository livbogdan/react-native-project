import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import {RecipesContext} from "../../../App"
import Card from "../../components/Card";
import Input from "../../components/Input";
import styles from "./styles";

const Search = ({navigation}) => {
    const {recipes} = useContext(RecipesContext)
    const [filteredRecipes, setFilteredRecipes] = useState([]) 
    const [keyword, setKeyword] = useState(" ") 

    console.log("keyword :>>", keyword)

    //Filter Recipes in search bar
    useEffect(()=>{
        if(keyword?.length > 2){

        }
        else
        {
            setFilteredRecipes([]);
        }
        const filteredItems = recipes?.filter(rec => rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase())) // Search recipe by title using searchbar
        console.log("filtered items :>>>", filteredItems); //Show in console full information about recipe(s) when type in searchbar.
        setFilteredRecipes(filteredItems);
    }, [keyword])

    return (
        <SafeAreaView style={styles.container}>
            <Input autoFocus onChangeText = {setKeyword} value={keyword} />
            <FlatList
                data={filteredRecipes}
                numColumns={2} // Amount recipes in one row
                style={{flexGrow: 1,}}
                keyExtractor={item => String(item?.id)} // Take recipe name using id of recipe.
                renderItem={({item, index}) => ( // Show recipe in UI
                    <Card
                    title={item?.name} // Title of recipe
                    onPress={()=> navigation.navigate("RecipeDetails", {item})} //Navigate to Recipe
                    servings={item?.num_servings} // Amounth serving 
                    image={item?.thumbnail_url} // Image of Food/Recipe
                    rating={item?.user_ratings?.score} // Rating of recipe
                    author={item?.credits?.length // Author name, after name and image
                        ? { name: item?.credits[0]?.name, image: item?.credits[0]?.image_url }
                        : null}
                />
                )}

            />
        </SafeAreaView>


        
    )
}

export default React.memo(Search);  