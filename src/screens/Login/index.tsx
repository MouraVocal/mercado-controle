import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function LoginScreen({ navigation }) {
	return (
		<View>
			<TouchableOpacity onPress={()=> navigation.navigate('Home')}>
				<Text>Login</Text>
			</TouchableOpacity>
		</View>
	);
}
