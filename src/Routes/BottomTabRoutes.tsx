import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GraphicsScreen from '../screens/Graphics';
import { Home } from '../screens/Home';
import { SalesScreen } from '../screens/Sales';

export function BottomTabRoutes() {

	const Tab = createBottomTabNavigator();
  
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName='Início'
			>
				<Tab.Screen
					name="Histórico"
					component={GraphicsScreen}
				/>
				<Tab.Screen
					name="Início"
					component={Home}
				/>
				<Tab.Screen
					name="Ofertas"
					component={SalesScreen}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
