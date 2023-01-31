import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        
    },
    list: {
        marginBottom: 24,
    },
    card:
    {
        flexDirection: 'row',
        marginBottom: -15,
        height: 300,
        //iOS Shadow
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 10},
        shadowOpacity: 1,
        shadowRadius: 5,
        // Android Shadow
        elevation: 2,
    },
    recipeCard:
    {
        //iOS Shadow
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 10},
        shadowOpacity: 1,
        shadowRadius: 5,
        // Android Shadow
        elevation: 2,
    }
})

export default styles;