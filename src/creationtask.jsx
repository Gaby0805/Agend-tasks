import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './components/header';
import { Icon, Input } from 'react-native-elements'
import Task from './components/tarefas';
import { ScrollView, TextInput } from 'react-native-web';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

const App = () => {
    const navigation = useNavigation()
    
    return (
    <View className='flex-1 '>
    <Header texto={'Adicionar Tarefa'}/>


    
        <View className='Main  items-center flex-1'>


            <View className='flex w-full h-full flex-col  items-center'>

            <View className='w-8/12 flex flex-col flex-1 '>
        
            <View className=' flex-1 '>

                <View className='mt-9'> 
                <Text className='mb-2 bold'>Nome

                </Text>
                <TextInput className='  p-2 rounded-lg border border-black' placeholder='ex: guardar roupas'/>
                </View>
             
                <View className='mt-4'> 
                <Text className='mb-2 bold'>Nome

                </Text>
                <TextInput className='  p-2 rounded-lg border' placeholder='ex: guardar roupas do irmão' multiline={true}/>
                </View>

               <View className='mt-4'> 
                <Text className='mb-2 bold'>descrição

                </Text>
                <TextInput className='  p-2 rounded-lg border' placeholder='ex: guardar roupas do irmão' multiline={true}/>
                </View>



             

            </View>

            </View>


            </View>

        </View>

    <View className=' w-full h-fit  flex justify-end items-end'>
    <TouchableOpacity className='w-10 h-10 rounded-full flex  bg-blue-700 justify-center items-center text-2xl m-4 pointer-events-auto'
    onPress={()=> {navigation.navigate('Create')}}
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
