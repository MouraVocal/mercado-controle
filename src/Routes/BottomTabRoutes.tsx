import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import GraphicsScreen from '../screens/Graphics';
import { Home } from '../screens/Home';
import { SalesScreen } from '../screens/Sales';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../theme';

export function BottomTabRoutes() {

	const Tab = createMaterialBottomTabNavigator();
  
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				activeColor={COLORS.WHITE}
				inactiveColor={COLORS.BLUE}
				barStyle={{ backgroundColor: COLORS.DARK_BLUE }}
			>
				<Tab.Screen
					name="Histórico"
					component={GraphicsScreen}
					options={{
						tabBarIcon: ({ color })=> (<AntDesign name="linechart" size={23} color={color} />),
					}}
				/>
				<Tab.Screen
					name="Início"
					component={Home}
					options={{
						tabBarIcon: ({ color })=> <AntDesign name="home" size={23} color={color} />,
					}}
				/>
				<Tab.Screen
					name="Ofertas"
					component={SalesScreen}
					options={{
						tabBarIcon: ({ color })=> <AntDesign name="wallet" size={23} color={color} />,
					}}
					
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
