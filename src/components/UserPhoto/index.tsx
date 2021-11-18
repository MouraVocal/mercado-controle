import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export function UserPhoto() {
	return (
		<View>
			<Image
				source={{ uri: 'https://github.com/mouravocal.png' }}
				style={styles.image}
			/>
		</View>
	);
}
