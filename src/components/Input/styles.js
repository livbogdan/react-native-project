import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: 
    {
        
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        padding: 10,
        marginVertical: 12,
    },
    text: 
    {
        color: colors.text,
        fontSize: 16,
    },
    icon: 
    {
        width: 22,
        height: 22,
        marginRight: 16,
    },
})

export default styles;