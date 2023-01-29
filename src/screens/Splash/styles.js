import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    background: { 
        width: '110%', 
        height: '110%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 75,
        
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 14,
        backgroundColor: colors.primary,
        borderRadius: 20,
    },
    title: {
        color: colors.secondary,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500'
    },
    bigTitle: {
        fontSize: 50,
        color: colors.primary,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        
         // iOS
         shadowColor: "#000",
         shadowOffset: {
             width: 1,
             height: 10,
         },
         shadowOpacity: 1,
         shadowRadius: 5,
         // Android
         elevation: 1,
         
         


    },
    subtitle: {
        color: colors.primary,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 64,
        marginTop: 15,
        borderRadius: 5,
        //iOS Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        // Android Shadow
        elevation: 2,
    }
})

export default styles;