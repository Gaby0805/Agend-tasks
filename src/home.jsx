import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './components/header';
import { Icon } from 'react-native-elements'
import Task from './components/tarefas';
import tarefasJson from '../database/bd.json';
import { ScrollView } from 'react-native-web';


const App = () => {

    const tarefas = tarefasJson.Tarefas;
    
    return (
    <View className='flex-1 '>
    <Header/>


    
        <View className='Main  items-center flex-1'>

            <View className='w-full h-5 flex justify-center items-center mt-8'>
                <Text className='text-3xl'>Tarefas</Text>
            </View>
        <ScrollView className='w-11/12'>
  {tarefas.map((items) => (
    <Task
      key={items.id}
      nome={items.nome_tarefa}
      Categoria={items.categoria}
      Data={items.data_final}
      Status={items.status}
    />
  ))}
</ScrollView>
        

        </View>

    <View className=' w-full h-fit  flex justify-end items-end'>
    <TouchableOpacity className='w-10 h-10 rounded-full flex  bg-blue-700 justify-center items-center text-2xl m-4 pointer-events-auto'
    onPress={()=> {console.log('bread')}}
    >
    <Icon
        name='add'
        color='#fff' />
    </TouchableOpacity>

    </View>
    </View>
  );
};

export default App;
