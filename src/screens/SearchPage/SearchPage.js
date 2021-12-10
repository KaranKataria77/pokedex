/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import styles from './styles';
import {SvgUri} from 'react-native-svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function SearchPage(props) {

  const {navigation} = props;

  const [handleSubmit, setHandleSubmit] = useState();
  const [result, setResult] = useState();

  function getInput(e){
    let value = e;
    setHandleSubmit(value)
    console.log('e', value);
  }
  
  function onSub(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${handleSubmit.toLowerCase()}/`)
      .then(res => {
        console.log('TTTT', res);
        if (res.status === 404){
          console.log('err');
          return null;
        } else {
          return res.json()
        }
      })
      .then(resp => {
        console.log('#########',resp);
        if(resp === null){
          setResult('Not found');
          return null;
        } else {
          navigation.navigate('DetailPage', {
            pokeName: resp.forms[0].name && resp.forms[0].name !== undefined ? resp.forms[0].name : '',
          })
        }
      })
      .catch(e => console.log('ererer',e));
    console.log('EEEEE', handleSubmit);
  }

  return (
    <SafeAreaView style={styles.page}>
      <MaterialIcon style={styles.backIcon} name="arrow-back"></MaterialIcon>
      <View style={styles.searchView}>
        <View style={styles.searchIconView}>
          <MaterialIcon style={styles.search} name="search"></MaterialIcon>
        </View>
        <View style={styles.searchTextView}>
          <TextInput onChangeText={(e) => {
            getInput(e)
          }} 
          onSubmitEditing={() => {
            onSub()
          }}
          style={styles.searchText} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SearchPage;
