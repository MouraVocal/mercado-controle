import React, { useState } from 'react';

//Expo
import { StatusBar } from 'expo-status-bar';

//Expo Google Fonts
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

//React Native Paper lib
import { Provider as PaperProvider } from 'react-native-paper';
import { BottomTabRoutes } from './src/Routes/BottomTabRoutes';
import { LoginRoutes } from './src/Routes/LoginRoutes';
import { COLORS } from './src/theme';

export default function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold
	});

	if(!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<PaperProvider>
				<StatusBar
					style='auto'
					translucent={true}
					backgroundColor={COLORS.WHITE}
				/>
				{isLoggedIn ? <BottomTabRoutes /> : <LoginRoutes />}		
			</PaperProvider>
		);
	}	
}
