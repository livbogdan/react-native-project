import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    item: {
        fontSize: 12,
        color: colors.third,
        fontWeight: 'bold',
        padding: 8,
        paddingHorizontal: 12,
    },
    selectedItem: {
        color: colors.text
    },
    itemContainer: {
        marginRight: 8,
        marginBottom: 14,
    },
    selectedItemContainer: {
        backgroundColor: colors.third,
        borderRadius: 10,
    }
});

export default styles;