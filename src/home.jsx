import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './components/header';
import Task from './components/tarefas';
import { Icon } from 'react-native-elements'

const App = () => {


  return (
    <View className='flex-1 '>
    <Header/>


    
        <View className='Main  items-center flex-1'>
        <Task/>

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
