/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ListPage from './src/screens/ListPage/ListPage';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {View, Text} from 'react-native';
import DetailPage from './src/screens/DetailPage/DetailPage';

const Stack = createNativeStackNavigator();

function ListNav() {
    return (
        <NavigationContainer independent={true}>
      <Stack.Navigator
        style={{marginTop: 20}}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{
            tabBarShowLabel: false,
          }}
          name="ListPage"
          component={ListPage}
        />
        <Stack.Screen
          options={{
            tabBarShowLabel: false,
          }}
          name="DetailPage"
          component={DetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default ListNav;
