import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {

	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold
	});

	const Stack = createNativeStackNavigator();

	if(!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<>
				<StatusBar
					style='auto'
					translucent={true}
					backgroundColor='transparent'
				/>
				<NavigationContainer>
					<Stack.Screen
						name='Home'
						component={Home}
					/>
				</NavigationContainer>
				<Home />
			</>
		);
	}	
}
