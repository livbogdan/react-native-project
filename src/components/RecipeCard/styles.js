import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: colors.secondary,
        padding: 10,
        width: width * 0.7,
        marginBottom: 32,
        marginTop: 46,
        marginRight: 16,

        // iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        // Android
        elevation: 9,
    },
    title: {
        fontSize: 14,
        color: colors.text,
        fontWeight: 'bold',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginTop: 8
    },
    footerText: {
        color: colors.text,
        fontSize: 11,
    },
    authorImage: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginRight: 8,
        backgroundColor: colors.third,
    },
    timerIcon: {
        width: 17,
        height: 17,
        marginRight: 8, 
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginTop: -40
    }
});

export default styles;
