/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import styles from './styles';
import {SvgUri} from 'react-native-svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var cardColor = '';

function PokeCard(props) {
  const {result, navigation, page} = props;

  const [images, setImages] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [addFav, setAddFav] = useState(false);
  const [Pid, setPId] = useState();
  const [addPoke, setAddPoke] = useState([]);
  const [color, setColor] = useState();
  const [pokeId, setPokeId] = useState();
  const [colorUrl, setColorUrl] = useState();

  useEffect(() => {
    if(page === 'bookMark'){
      setAddFav(true)
    }
    if (result && result !== undefined && page === 'listPage') {
      fetch(result.url)
        .then(res => res.json())
        .then(resp => {
          fetch(resp && resp.species.url !== undefined ? resp.species.url : '')
            .then(response => response.json())
            .then(rest => {
              cardColor =
                rest && rest.color.name !== undefined ? rest.color.name : '';
              setColor(
                rest && rest.color.name !== undefined ? rest.color.name : '',
              );
              setPId(resp && resp.id !== undefined ? resp.id : '');
            })
            .catch(e => console.log(e));
          setName(resp && resp.name !== undefined ? resp.name : '');
          setType(resp && resp.types !== undefined ? resp.types : '');
          setImages(
            resp && resp.sprites.other.dream_world.front_default !== undefined
              ? resp.sprites.other.dream_world.front_default
              : '',
          );
          //   console.log('$', resp);
        })
        .catch(e => console.log(e));
    }
    if (result && result !== undefined && page === 'bookMark'){
      console.log('from poke card', result);
        fetch(result.url)
        .then(res => res.json())
        .then(resp => {
          fetch(resp && resp.species.url !== undefined ? resp.species.url : '')
            .then(response => response.json())
            .then(rest => {
              cardColor =
                rest && rest.color.name !== undefined ? rest.color.name : '';
              setColor(
                rest && rest.color.name !== undefined ? rest.color.name : '',
              );
              setPId(resp && resp.id !== undefined ? resp.id : '');
            })
            .catch(e => console.log(e));
          setName(resp && resp.name !== undefined ? resp.name : '');
          setType(resp && resp.types !== undefined ? resp.types : '');
          setImages(
            resp && resp.sprites.other.dream_world.front_default !== undefined
              ? resp.sprites.other.dream_world.front_default
              : '',
          );
        })
        .catch(e => console.log('errrr',e));
    }
    let ap = '';
  }, [result, Pid]);

  async function allArray(id) {
    let bookmark = [];
    // await AsyncStorage.removeItem('bookmarks')
    const rest = await AsyncStorage.getItem('bookmarks');
    let res = JSON.parse(rest);
    if (rest === null && res !== []) {
      bookmark.push(id);
      await AsyncStorage.setItem(
        'bookmarks',
        JSON.stringify(bookmark),
        err => {
          if (err) {
            console.log('err 1', err);
          }
          console.log('s 1');
        },
      );
    } else {
      console.log('ids', bookmark);
      bookmark = res
      if (bookmark.includes(id)){
        let gID = bookmark.indexOf(id);
        bookmark.splice(gID, 1);
      } else {
        bookmark.push(id);
      }
      await AsyncStorage.removeItem('bookmarks');
      await AsyncStorage.setItem(
        'bookmarks',
        JSON.stringify(bookmark),
        (err) => {
          if (err){
            console.log('error while adding bookmarks 2');
          }else{
            console.log('success 2');
          }
        }
      );
      console.log('res', typeof(res));
    }
    console.log('rrr', rest);
  }

  async function setData(id) {
    try {
      await AsyncStorage.multiSet([['name', id]]);
      console.log('item set ', id);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailPage', {
          pokeName: name && name !== undefined ? name : '',
        });
      }}
      style={styles.pokecard}>
      <Text style={styles.pokename}>
        {name && name !== undefined ? name.toUpperCase() : ''}
      </Text>
      <TouchableOpacity
        style={styles.fav}
        onPress={() => {
          setAddFav(!addFav);
          allArray(Pid);
          // setData(name && name !== undefined ? name : '');
        }}>
        <MaterialIcon
          style={styles.favorite}
          name={addFav ? 'favorite' : 'favorite-border'}></MaterialIcon>
      </TouchableOpacity>
      <View style={styles.alignView}>
        <View style={styles.abilitiesView}>
          {type && type !== undefined
            ? type.map((data, index) => {
                return (
                  <Text key={index} style={{...styles.abilities}}>
                    {data && data.type.name !== undefined ? data.type.name : ''}
                  </Text>
                );
              })
            : null}
        </View>
        <View style={styles.pokeimgView}>
          <SvgUri
            style={styles.pokeimg}
            width={wp('25%')}
            height={hp('10%')}
            uri={images && images !== undefined ? images : ''}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default PokeCard;
