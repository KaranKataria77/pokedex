/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import PokeCard from '../../components/PokeCard/PokeCard';
import styles from './styles';
import {SvgUri} from 'react-native-svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function BookMark(props) {
  const {navigation} = props;
  const [images, setImages] = useState();
  const [name, setName] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    getBook();

    fetch('https://pokeapi.co/api/v2/pokemon/5/')
      .then(res => res.json())
      .then(resp => {
        setImages(resp.sprites.other.dream_world.front_default);
        // console.log(resp.sprites);
      })
      .catch(e => console.log(e));
  }, []);

  async function getBook() {
    const book = await AsyncStorage.getItem('bookmarks');
    const books = JSON.parse(book);
    let rest = [];
    setResult(books)
    
    if (books && books.length > 0){
        books.map((data, ind) => {
            let url = `https://pokeapi.co/api/v2/pokemon/${data}/`
            rest.push({url})
        })
    }
    setResult(rest)
    console.log('books', book, rest);
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcon
            style={styles.headerBack}
            name="arrow-back"></MaterialIcon>
        </TouchableOpacity>
        <Text style={styles.heading}>Bookmarks</Text>
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
                  page={'bookMark'}
                />
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default BookMark;
