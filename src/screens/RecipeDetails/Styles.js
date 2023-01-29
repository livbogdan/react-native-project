import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        flex: 1,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginVertical: 4,
    },
    key: {
        fontSize: 12,
        color: colors.text,
        textTransform: 'capitalize',
    },
    value: {
        fontSize: 12,
        color: colors.text,
    },
    instructionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
    },
    index: {
        fontSize: 20,
        color: colors.text,
        marginRight: 16,
    },
    instructionText: {
        fontSize: 14,
        color: colors.text,
        flex: 1,
    },
    view: {
        
        color: colors.secondary,
    },

})

export default styles;