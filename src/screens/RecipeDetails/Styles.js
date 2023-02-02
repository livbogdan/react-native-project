import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: 
    {
        marginHorizontal: 40,
        flex: 2,
    },
    image: 
    {
        width: "100%",
        height: 190,
        borderRadius: 20,
        borderWidth: 8,
        borderColor: colors.secondary,       
        marginBottom: 12,
        marginTop: 30,
    },
    row: 
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginVertical: 4,
        borderWidth: 3,
        borderColor: colors.borderColor,
        
    },
    key: 
    {
        fontSize: 15,
        color: colors.text,
    },
    value: 
    {
        fontSize: 12,
        color: colors.text,
    },
    instructionRow: 
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,      
    },
    instructionText: {
        fontSize: 16,
        color: colors.text,
        flex: 1,
        textAlign: "center",
        marginHorizontal: 20,
    },
    instruction:
    {
        width: "100%",
        marginTop: 15, 
        marginBottom: 16, 
        textAlign: "center",
        backgroundColor: colors.third,
        borderWidth: 3,
        borderRadius:15,
    },
    title:
    {
        fontSize: 32,
        width: "100%",
        marginTop: 20, 
        marginBottom: 6, 
        textAlign: "center",
    },
    nonFounded:
    {
        height: 50,
        fontSize: 30,
        textAlign: "center",
    }

})

export default styles;