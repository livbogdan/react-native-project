import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

const Card = ({title, image, serving, style}) => {
    return (
        <View style={[styles.container, style]}>
            <Image style={styles.image} source={{ uri: image}} />
                 <Text numberOfLines={3} style={styles.title}>{title}</Text>
                {serving ? (
                    <>
                        <Text style={styles.label}>Serving</Text>
                        <Text style={styles.value}>{serving}</Text>                  
                    </> 
                    ) : null}
        </View>
    );
};

export default React.memo(Card);