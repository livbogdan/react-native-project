import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
    },
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '500'
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    }
})

export default styles;