import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 25,
		paddingBottom: 20
	},
	textContainer: {
		paddingRight: 10
	},
	greeting: {
		fontFamily: FONTS.REGULAR,
		textAlignVertical: 'center',
		fontSize: 18
	},
	userName: {
		fontFamily: FONTS.BOLD,
		textAlignVertical: 'center',
		fontSize: 20
	}
});