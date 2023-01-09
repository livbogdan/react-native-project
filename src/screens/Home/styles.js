import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    background: { 
        width: '100%', 
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 60,
    },
    logo: {
        width: 128,
        height: 128,
        alignSelf: 'center',
        marginBottom: 14,
    },
    title: {
        color: colors.text,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500',
        
    },
    bigTitle: {
        fontSize: 50,
        color: colors.text,
        paddingHorizontal: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        color: colors.text,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 64,
        marginTop: 20,
    }
})

export default styles;