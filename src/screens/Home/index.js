import React, { useContext, useEffect, useState } from "react";
import {FlatList, SafeAreaView, Text,} from "react-native";
import { GamesContext, HealthGamesContext } from "../../../App";
//HealthyRecipesContext, RecipesContext

import Card from "../../components/Card";
import Categories from "../../components/Categories";
import Input from "../../components/Input";
import GameCard from "../../components/GameCard";
import Title from "../../components/Title";
import styles from "./Styles";


const Home = ({navigation}) => {
    const [tags, setTags] = useState([])
    const [selectedTag, setSelectedTag] = useState()
    const {healthyRecipes} = useContext(HealthGamesContext);
    const {games} = useContext(GamesContext);

    useEffect(() => {
        const tagsList = [];

        games?.forEach(recipe => {
            recipe?.tags?.forEach(tag => {
                if (!tagsList?.includes(tag?.name)) {
                    tagsList?.push(tag?.name)
                }
            })            
        })

        setTags(tagsList)
    }, [games])

   // console.log("healthy Games :>>", healthyRecipes);
    console.log("tags :>>", tags);

    return (

        <SafeAreaView style={styles.container}>
            <Input pressable onPress={()=> navigation.navigate("Search")}/>
  
            <Title text="Games" />
            
            <FlatList 
                horizontal
                data={healthyRecipes}
                style={{marginHorizontal: -24}}
                keyExtractor={item => String(item?.id)}
                showsHorizontalScrollIndicator= {false}
                renderItem={({ item, index }) => (

                    <GameCard
                    style={index === 0 ? {marginLeft: 24, }: {}}
                    title = {item?.name}
                    serving= {item?.cook_time_minutes}
                    image = {item?.thumbnail_url}
                    rating = {item?.user_rating?.score}
                    author={item?.credits?.length 
                        ? {name: item?.credits[0]?.name, image : item?.credits[0]?.image_url}
                        :null }/>
                )}
            
                />


            
            <Categories  categories={tags} selectedCategory = {selectedTag} onCategoryPress={setSelectedTag} />

            <FlatList 
                horizontal
                data={games}
                style={{marginHorizontal: -24}}
                keyExtractor={item => String(item.id)}
                showsHorizontalScrollIndicator= {false}
                renderItem={({item, index}) => (

                    <Card
                    style={index === 0 ? {marginLeft: 24, }: {}}
                    title = {item?.name}
                    serving= {item?.cook_time_minutes}
                    image = {item?.thumbnail_url}
                    rating = {item?.user_rating?.score}
                    author={item?.credits.length 
                        ? {name: item?.credits[0]?.name, image : item?.credits[0]?.image_url}
                        :null }/>
                )}
            
                />

        </SafeAreaView>
    )
}

export default React.memo(Home);
