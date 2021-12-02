import React from 'react';
import { View, FlatList } from 'react-native';
import { ProductCard } from '../ProductCard';

export function ProductList() {

	const products = [
		{
			id: 1,
			description: 'Pera',
			photo: 'https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
			valor: 15,
			store: 'Wal Mart',
		},
		{
			id: 2,
			description: 'Maçã',
			photo: 'https://images.pexels.com/photos/6157055/pexels-photo-6157055.jpeg?cs=srgb&dl=pexels-laker-6157055.jpg&fm=jpg',
			valor: 12,
			store: 'Carrefour',
		}
	];

	const renderItem = ({ item }) => {
		return(
			<ProductCard product={item} />
		);
	};

	return (
		<View>
			<FlatList
				data={products}
				renderItem={renderItem}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	);
}
