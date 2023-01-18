import React from "react";
import { Image, View } from "react-native";

import styles from "./styles";


const Rating =({rating}) => {
    const arr = [1,2,3,4,5]
    //0-1.4 = 1 Star
    //1.5-2.4 = 2 Star
    //2.5-3.4 = 3 Star
    //3.5-4.4 = 4 Star
    //4.5-5 = 5 Star

    const renderStar = () => {
        return arr?.map(star => {
            if (Math.round(rating) >= star) {
                return (
                    <Image key={star} style={styles.star} source={require("../../../assets/StarFilled.png")} />
                )
            }

            return (
                <Image key={star} style={styles.star} source={require("../../../assets/StarEmpty.png")}/>
            )
        })
    }

    return (
        <View style={styles.row}>
            {renderStar()}
        </View>
    )

};

export default React.memo(Rating);