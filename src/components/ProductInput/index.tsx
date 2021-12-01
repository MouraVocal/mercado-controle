import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { Avatar, Switch, TextInput } from 'react-native-paper';

import { COLORS } from '../../theme';
import { styles } from './styles';

export function ProductInput() {

	const [isSwitchOn, setIsSwitchOn] = useState(false);

	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity>
					<Avatar.Icon size={50} icon='camera' />
				</TouchableOpacity>
				<TextInput
					label='Loja'
					placeholder='Digite o Nome...'
					style={{width: '50%' }}
					mode='outlined'
				/>
				<View>
					<Text>Fixo?</Text>
					<Switch value={isSwitchOn} onValueChange={()=>setIsSwitchOn(!isSwitchOn)} />	
				</View>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					label='Produto'
					placeholder='Digite o nome...'
					style={{width: '60%' }}
					mode='outlined'
				/>
				<TextInput
					label='Preço'
					placeholder='Digite o Valor...'
					style={{width: '30%' }}
					mode='outlined'
				/>			
			</View>
		</>
	);
}
