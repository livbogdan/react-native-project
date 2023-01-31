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
        paddingHorizontal: 25,
        paddingVertical: 75,
        borderRadius: 5,
        
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 14,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    title: {
        backgroundColor: 'white',
        color: colors.secondary,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500'
    },
    bigTitle: {
        fontSize: 50,
        backgroundColor: 'white',
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
        backgroundColor: 'white',
        color: colors.primary,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 64,
        marginTop: 15,
        
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