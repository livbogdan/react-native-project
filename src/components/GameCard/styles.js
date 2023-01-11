import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const {width} =Dimensions.get("window");

const styles = StyleSheet.create({
    container:
    {
        borderRadius: 10,
        backgroundColor: colors.secondary,
        padding: 10,
        width: width * 0.6,
        //iOS
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        //Android
        elevation: 14,
    },
    title:
    {
        fontSize: 15,
        color: colors.text,
        fontWeight: "bold"
    },
    row:
    {
        flexDirection: "row",
        alignItems: "center"
    },
    footerText:
    {
        color: colors.text,
        fontSize: 11
    },
    authorImage:
    {
        width: 25,
        height: 25,
        borderRadius: 10,
        marginRight: 8,
    },
    trophyIcon:
    {
        width: 15,
        height: 15,
        marginRight: 8
    }
})

export default styles;