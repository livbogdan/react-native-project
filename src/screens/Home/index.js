import {SafeAreaView, Text,} from "react-native";

import React from "react";
import styles from "./Styles";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Categories from "../../components/Categories";
import GameCard from "../../components/GameCard";

const Home = ({navigation}) => {
    return (

        <SafeAreaView style={styles.container}>
            <Input pressable onPress={()=> navigation.navigate("Search")}/>

            <Title text="Featured Games" />
            
            <GameCard
                    title= "God of War: Ragnarok"
                    trophy="38"
                    author={{
                        name: "i3ogdan",
                        image: "https://wallpaperaccess.com/full/2111014.jpg"
                    }}/>
            
            <Categories  categories={["All", "Trending"]} selectedCategory = "All" onCategoryPress={() => {}} />
        </SafeAreaView>
    )
}

export default React.memo(Home);
