import React from 'react';
import { View, Text } from 'react-native';

interface IProductProps {
	id: number;
	description: string;
	photo: string;
	valor: number;
	store: string;
	date: number;
}

interface Props {
	product: IProductProps;
}

export const ProductCard: React.FC<Props> = ({ product }) => {

	const createdTime = new Date(product.date).toLocaleTimeString();
	
	return (
		<View>
			<Text>{createdTime}</Text>
			<Text>{product.id}</Text>
			<Text>{product.description}</Text>
			<Text>{product.photo}</Text>
			<Text>{product.store}</Text>
		</View>
	);
};
