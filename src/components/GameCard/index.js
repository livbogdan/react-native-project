import React from "react";
import { Image, Text, View } from "react-native";
import Rating from "../Rating";

import styles from "./styles";

const GameCard = ({title, image, author, rating, time, style}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.row}>
                <View style={{flex: 1}}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>

                    <Rating rating={rating}/>
                </View>
                
                <Image style={styles.image} source={{ uri: image}} />
            </View>


            <View style={styles.footer}>
                <View style={styles.row} >
                    <Image style={styles.authorImage} source={{uri: author?.image}} />
                    <Text style={styles.footerText}>By {author?.name}</Text>
                </View>

                <View style={styles.row}>
                    <Image style={styles.trophyIcon} source={require("../../../assets/trophy.png")} />
                    <Text style={styles.footerText}>{time}</Text>
                </View>
            </View>
        </View>
    );
};

export default React.memo(GameCard);