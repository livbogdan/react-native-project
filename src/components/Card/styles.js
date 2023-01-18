import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:
    {
        borderRadius: 10,
        backgroundColor: colors.secondary,
        padding: 10,
        width: width * 0.4,
        marginVertical: 32,
        marginTop: 60,
        marginRight: 20,
        
    },
    title:
    {
        fontSize: 20,
        color: colors.text,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 13
    },
    label:
    {
        color: colors.text,
        fontSize: 15,
        marginTop: 8,
        marginBottom: 4,
    },
    value:
    {
        color: colors.text,
        fontSize: 15,
        fontWeight: "bold"
    },
    image:
    {
        width: 70,
        height: 100,
        borderRadius: 10,
        marginTop: -60,
        alignSelf: "center"
    },
    footer:
    {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between", 
        marginTop: 8
    }
})

export default styles;