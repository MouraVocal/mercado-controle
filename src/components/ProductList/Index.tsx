import React from 'react';
import { View, FlatList } from 'react-native';
import { ProductCard } from '../ProductCard';

export function ProductList() {

	const products = [
		{
			id: 1,
			description: 'pera',
			photo: 'teste',
			valor: 12,
			store: 'Wal Mart',
			date: Date.now(),
		},
		{
			id: 2,
			description: 'maçã',
			photo: 'teste',
			valor: 12,
			store: 'Carrefour',
			date: Date.now(),
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
