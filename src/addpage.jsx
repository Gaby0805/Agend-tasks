import { Select, SelectItem } from '@ui-kitten/components';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './components/header';
import { Icon } from 'react-native-elements'
import Task from './components/tarefas';
import tarefasJson from '../database/bd.json';
import { ScrollView } from 'react-native-web';


export default function Addpage() {

    const tarefas = tarefasJson.Tarefas;
    
    return (
    <View className='flex-1 '>
    <Header param={'Adicionar tarefa'} />


    
        <View className='Main  items-center flex-1'>

        <Select 
        className='flex-1'
        placeholder={evaProps => <Text {...evaProps}>Selecione categoria</Text>}
        label={evaProps => <Text {...evaProps}>Categoria</Text>}>
        <SelectItem title={evaProps => <Text {...evaProps}>Option 1</Text>} />
        <SelectItem title={evaProps => <Text {...evaProps}>Option 2</Text>} />
        <SelectItem title={evaProps => <Text {...evaProps}>Option 3</Text>} />
        </Select> 

        </View>

    <View className=' w-full h-fit  flex justify-end items-end'>
    <TouchableOpacity className='w-10 h-10 rounded-full flex  bg-blue-700 justify-center items-center text-2xl m-4 pointer-events-auto'
    onPress={()=> {alert('return button ')}}
    >
    <Icon
        name='add'
        color='#fff' />
    </TouchableOpacity>

    </View>
    </View>
  );
};

