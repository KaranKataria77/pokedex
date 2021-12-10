/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ListPage from './src/screens/ListPage/ListPage';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {View, Text} from 'react-native';
import BookMark from './src/screens/BookMark/BookMark';
import SearchPage from './src/screens/SearchPage/SearchPage';
import DetailPage from './src/screens/DetailPage/DetailPage';

const Stack = createNativeStackNavigator();

function SearchNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        style={{marginTop: 20}}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{
            tabBarShowLabel: false,
          }}
          name="SearchPage"
          component={SearchPage}
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
  );
}

export default SearchNav;
