import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:
    {
        borderRadius: 10,
        backgroundColor: colors.secondary,
        padding: 10,
        width: width * 0.8,
        marginTop: 56,
        marginBottom: 32,
        marginRight: 20,
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
        fontSize: 20,
        color: colors.text,
        fontWeight: "bold",
        flex: 1
    },
    row:
    {
        flexDirection: "row",
        alignItems: "center"
    },
    footerText:
    {
        color: colors.text,
        fontSize: 15
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
    },
    image:
    {
        width: 100,
        height: 150,
        borderRadius: 10,
        marginTop: -40,
        marginLeft: 60,
                //iOS
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        //Android
        elevation: 14,
    },
    footer:
    {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", 
        marginTop: 8
    }
})

export default styles;