/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import {SvgUri} from 'react-native-svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import PokeCard from '../../components/PokeCard/PokeCard';

const arr = [1, 2, 3, 3, 3, 3, 3, 3, 3];

function ListPage(props) {
  const {navigation} = props;
  const [images, setImages] = useState();
  const [name, setName] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
      .then(res => res.json())
      .then(resp => {
        let rest = [];
        // console.log('&&', rest.concat(resp.results));
        setResult(rest.concat(resp.results));
        // console.log('$', resp.results);
      })
      .catch(e => console.log(e));

    fetch('https://pokeapi.co/api/v2/pokemon/5/')
      .then(res => res.json())
      .then(resp => {
        setImages(resp.sprites.other.dream_world.front_default);
        // console.log(resp.sprites);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcon
            style={styles.headerBack}
            name="arrow-back"></MaterialIcon>
        </TouchableOpacity>
        <Text style={styles.heading}>Pokedex</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {result && result !== undefined
          ? result.map((da, ind) => {
              return (
                <PokeCard
                  navigation={navigation}
                  result={da && da !== undefined ? da : ''}
                  key={ind}
                  page={'listPage'}
                />
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListPage;
