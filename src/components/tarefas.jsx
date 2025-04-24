import { useState } from "react";
import { Text, View } from "react-native";



const Task= () =>  {
    const [tarefas, SetTarefas] = useState('Tarefa 1')
    const [Status, SetStatus] = useState('A cumprir')
    const [Data, SetData] = useState("2022-03-25")
    const [Categoria, SetCategoria] = useState('cozinha')

    return (

        <View className='w-4/5 h-fit mt-6 flex flex-col justify-center border-b-[1px]'>
            <View  className='flex flex-row items-center'>

            <Text className='flex justify-center items-center text-[20px] mb-2 h-fit font-bold  '>

                {tarefas}

            </Text>


            <Text className='ml-10 bg-yellow-500 rounded-3xl w-36 h-fit flex justify-center items-center py-1 mb-1 text-white font-bold'>
                
                {Status}
            
            </Text>
            
            
            </View>
            
            <View className='ml-1 mt-[-5px] mb-3'>
            
                {Data}
            
            </View>

            <View className='mb-2' >
                categoria - {Categoria}
            </View>

        </View>
        
    )
}

export default Task