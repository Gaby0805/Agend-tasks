import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = () => {
  return (
    <View className="flex w-full h-16 bg-blue-700 justify-center items-center">
      <Text className="text-2xl text-white">
          Abril/2025
      </Text>
      <View className='rounded-full bg-gray-500 w-10 h-10 absolute right-1 flex justify-center items-center cursor-pointer'>
        <Icon name='settings'
          color='#fff'
        />
      </View>
    </View>
  );
};

export default Header;
