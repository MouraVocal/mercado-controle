import { StyleSheet } from 'react-native';

const SIZES = {
	containerSize: 50,
	avatarSize: 40
};

export const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		height: SIZES.containerSize,
		width: SIZES.containerSize,
		borderRadius: SIZES.containerSize/2
	}
});