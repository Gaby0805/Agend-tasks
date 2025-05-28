import { Text, View } from "react-native";



export default function Task({nome, Status, Data, Categoria})  {
    // const [tarefas, SetTarefas] = useState()
    // const [Status, SetStatus] = useState()
    // const [Data, SetData] = useState()
    // const [Categoria, SetCategoria] = useState()

    const color = {
        "A realizar": "bg-gray-400",
        "Completo": "bg-green-400",
        "Em progresso": "bg-yellow-400",

    }

    return (

        <View className=' h-fit mt-6 justify-start border-b-[1px] flex-1 flex-row  '>
            <View className='mr-5 flex-1 '>


                <Text className='flex  items-center text-[20px] mb-2 h-fit font-bold  '>

                    {nome}

                </Text>

                            
                <View className='ml-1 mt-[-5px] mb-3'>
                
                    {Data}
                
                </View>

                <View className='mb-2' >
                    categoria - {Categoria}
                </View>

            </View>

            <View className ='w-fit h-fit  mr-5 '>

            <Text className={` ${color[Status]} rounded-3xl w-36 h-fit flex justify-center items-center py-1 mb-1 text-white font-bold `}>
                    
                    {Status}
                
                </Text>
                
            </View>

        </View>
        
    )
}

