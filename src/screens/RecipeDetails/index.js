import React from "react";
import {Image, SafeAreaView, Text, View, ScrollView} from "react-native";

import Title from "../../components/Title";
import styles from "./Styles";

const RecipeDetails = ({ route }) => { 
    const { item } = route?.params || {};
    console.log('item?.instructions :>> ', item?.instructions);
    const instructions = item?.instructions || []; // Recipe step by step instruction
    const nutrition = item?.nutrition; // row of recipe components
    delete nutrition?.updated_at; // Remove from components when recipe updated
    const nutritionKeys = Object.keys(nutrition || {}); 

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                
                <Title style={styles.title} text={item?.name} />
                <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
                <Title style={styles.title} text= "Nutrition"/>
                <View>
                    {nutritionKeys?.map(key => (
                        <View key={key} style={styles.row}>
                            <Text style={styles.key}>{key}</Text>
                            <Text style={styles.value}>{nutrition[key]}</Text>
                        </View> 
                    ))}

                    {!nutritionKeys?.length ? ( //If Nutrition not available
                        <Text style={styles.nonFounded}>NOT FOUND.</Text> 
                    ): null}

                </View>

                        

                <Title style={styles.title} text="Instruction" />  
                <View style={styles.instruction}>
                        {instructions?.map((instruction) => (
                        <View key={instruction?.id} style={styles.instructionRow}>
                            <Text style={styles.instructionText}>{instruction?.display_text}</Text>
                        </View>
                    ))}

                
                    {!instructions?.length ? ( // If instruction non available.
                        <Text style={styles.nonFounded}>NOT FOUND.</Text> 
                    ) : null} 
                </View>


            </ScrollView>
        </SafeAreaView>

    )
}

export default React.memo(RecipeDetails);  