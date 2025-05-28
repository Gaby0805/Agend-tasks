import  { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './components/header';
import { Icon, Input } from 'react-native-elements'
import Task from './components/tarefas';
import MaskInput, { Masks } from 'react-native-mask-input';
import { Picker, ScrollView, TextInput } from 'react-native-web';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

const App = () => {

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
  ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
    const [categoria, setCategoria] = useState()
    const navigation = useNavigation()
      const [date, setDate] = useState('');
    return (
    <View className='flex-1 '>
    <Header texto={'Adicionar Tarefa'}/>


    
        <View className='Main  items-center flex-1'>


            <View className='flex w-full h-full flex-col  items-center'>

            <View className='w-8/12 flex flex-col flex-1 '>
        
            <View className=' flex-1 '>

                <View className='mt-9'> 
                <Text className='mb-2 font-bold'>Nome

                </Text>
                <TextInput className='  p-2 rounded-lg border border-black' placeholder='ex: guardar roupas'/>
                </View>
             
                <View className='mt-4'> 
                <Text className='mb-2 font-bold'>Categoria
                </Text>
                <Picker className='p-4' selectedValue={categoria} onValueChange={texto => setCategoria(texto)}>
                    <Picker.Item label="Estudo" value="estudo" />
                    <Picker.Item label="Trabalho" value="trabalho" />
                    <Picker.Item label="Reunião" value="reuniao" />
                    <Picker.Item label="Prova" value="prova" />
                    <Picker.Item label="Aula" value="aula" />
                </Picker>
      
        </View>

               <View className='mt-4'> 
                <Text className='mb-2 font-bold'>descrição

                </Text>
                <TextInput className='  p-2 rounded-lg border' placeholder='ex: guardar roupas do irmão' multiline={true}/>
                </View>


      <View className='mt-4'>
            <Text className='mb-2 font-bold'>Data</Text>
            <MaskInput
                value={date}
                onChangeText={(masked, unmasked) => {
                setDate(masked); // você pode usar 'unmasked' se quiser só os números
                }}
                mask={Masks.DATE_DDMMYYYY}
                keyboardType='numeric'
                placeholder='ex: 25/12/2025'
                className='p-2 rounded-lg border border-black'
            />
    </View>

             <View className='w-full items-end'  >
                <TouchableOpacity className='px-4 py-2 bg-slate-300 rounded-lg mt-5' >enviar</TouchableOpacity>
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
