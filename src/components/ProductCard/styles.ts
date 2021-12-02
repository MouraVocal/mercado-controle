import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		paddingVertical: 10,
		borderRadius: 5,
		marginVertical: 10,
		width: '90%',
		elevation: 5
	},
	centeredView: {
		justifyContent: 'center'
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderColor: COLORS.BLACK,
		borderWidth: 1
	},
	detailsContainer: {
		padding: 10
	},
	title: {
		fontFamily: FONTS.BOLD,
		fontSize: 20
	},
	description: {
		fontFamily: FONTS.REGULAR,
		fontSize: 15
	}
});