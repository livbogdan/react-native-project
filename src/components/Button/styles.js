import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.third,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
    },
    text: {
        color: colors.text,
        fontSize: 30,
        fontWeight: '400',
        marginRight: 20,
        textAlign: 'center'
        
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 10,
    }
})

export default styles;