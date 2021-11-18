import React, { useState } from 'react';
import { View, Text } from 'react-native';

//Components
import { Header } from '../../components/Header';

//Style
import { styles } from './styles';

//React Native Paper
import { Searchbar } from 'react-native-paper';

export function Home() {

	const [query, setQuery] = useState('');

	return (
		<View style={styles.container}>
			<Header />
			<Searchbar
				placeholder='Buscar'
				onChangeText={text => setQuery(text)}
				value={query}
				style={{width: '90%', alignSelf: 'center'}}
			/>
			<Text>Produto, preço, loja</Text>
		</View>
	);
}
