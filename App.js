/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import DetailPage from './src/screens/DetailPage/DetailPage';
import ListPage from './src/screens/ListPage/ListPage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchPage from './src/screens/SearchPage/SearchPage';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import BookMark from './src/screens/BookMark/BookMark';
import ListNav from './ListNav';
import BookNav from './BookNav';
import SearchNav from './SearchNav';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        style={{marginTop: 20}}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View style={{height: 30, width: 30}}>
                  <MaterialIcon
                    style={{fontSize: 30, color:'black'}}
                    name="list-alt"></MaterialIcon>
                </View>
              );
            },
          }}
          name="ListNav"
          component={ListNav}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => {
              console.log('****', size, color, focused);
              return (
                <View style={{height: 30, width: 30}}>
                  <MaterialIcon
                    style={{fontSize: 30, color:'black'}}
                    name="search"></MaterialIcon>
                </View>
              );
            },
          }}
          name="SearchNav"
          component={SearchNav}
        />
        {/* <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => {
              console.log('****', size, color, focused);
              return (
                <View style={{height: 30, width: 30}}>
                  <MaterialIcon
                    style={{fontSize: 30, color:'black'}}
                    name="description"></MaterialIcon>
                </View>
              );
            },
          }}
          name="DetailPage"
          component={DetailPage}
        /> */}
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => {
              console.log('****', size, color, focused);
              return (
                <View style={{height: 30, width: 30}}>
                  <MaterialIcon
                    style={{fontSize: 30, color:'black'}}
                    name="bookmark"></MaterialIcon>
                </View>
              );
            },
          }}
          name="BookNav"
          component={BookNav}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
