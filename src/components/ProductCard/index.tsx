import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import { COLORS } from '../../theme';
import { styles } from './styles';

interface IProductProps {
	id: number;
	description: string;
	photo: string;
	valor: number;
	store: string;
}

interface Props {
	product: IProductProps;
}

export const ProductCard: React.FC<Props> = ({ product }) => {	
	return (
		<View style={styles.container}>
			<View style={styles.centeredView}>
				<Image source={{uri: product.photo}} style={styles.image} />
			</View>
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{product.description}</Text>
				<Text style={styles.description}>Preço Médio: R$ {product.valor}</Text>
			</View>
			<View style={styles.centeredView}>
				<TouchableOpacity>
					<IconButton 
						icon='playlist-plus'
						color={COLORS.DARK_BLUE}
						size={30}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};
