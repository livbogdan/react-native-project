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
        const filteredItems = recipes?.filter(rec => rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase()))
        console.log("filtered items :>>>", filteredItems);
        setFilteredRecipes(filteredItems);
    }, [keyword])

    return (
        <SafeAreaView style={styles.container}>
            <Input autoFocus onChangeText = {setKeyword} value={keyword} />
            <FlatList
                data={filteredRecipes}
                numColumns={2}
                style={{flexGrow: 1,}}
                keyExtractor={item => String(item?.id)}
                renderItem={({item, index}) => (
                    <Card
                    title={item?.name}
                    onPress={()=> navigation.navigate("RecipeDetails", {item})} //Navigate to Recipe
                    servings={item?.num_servings}
                    image={item?.thumbnail_url}
                    rating={item?.user_ratings?.score}
                    author={item?.credits?.length
                        ? { name: item?.credits[0]?.name, image: item?.credits[0]?.image_url }
                        : null}
                />
                )}

            />
        </SafeAreaView>


        
    )
}

export default React.memo(Search);  