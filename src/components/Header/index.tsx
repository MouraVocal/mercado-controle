import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

export function Header() {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.greeting}>Olá,</Text>
					<Text style={styles.userName}>Diego</Text>
				</View>
				<UserPhoto />
			</View>
			<Text style={styles.asking}>O que você precisa listar para a próxima compra?</Text>
		</>
	);
}
