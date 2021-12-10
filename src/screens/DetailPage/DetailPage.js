/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, AsyncStorage, TouchableOpacity} from 'react-native';
import styles from './styles';
import {SvgUri} from 'react-native-svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TopTab from '../../components/TopTab/TopTab';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function DetailPage(props) {
  const [images, setImages] = useState();
  const [stats, setStats] = useState();
  const [name, setName] = useState();
  const [abilities, setAbilities] = useState();
  const [id, setId] = useState();
  const [description, setDescription] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [baseExp, setBaseExp] = useState();
  const [abilit, setAbilit] = useState();

  const {navigation, route} = props;

  const {pokeName} = route.params;

  useEffect(() => {
    console.log('nmae', pokeName, route);
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        pokeName && pokeName !== undefined ? pokeName : ''
      }/`,
    )
      .then(res => res.json())
      .then(resp => {
        console.log('name', resp);
        setImages(resp.sprites.other.dream_world.front_default);
        setName(resp && resp !== undefined && resp.name ? resp.name : '');
        setAbilities(
          resp && resp !== undefined && resp.types !== undefined
            ? resp.types
            : '',
        );
        setId(resp && resp !== undefined && resp.id ? resp.id : '');
        setStats(
          resp && resp !== undefined && resp.stats !== undefined
            ? resp.stats
            : '',
        );
        setWeight(resp && resp !== undefined && resp.weight ? resp.weight : '');
        setHeight(resp && resp !== undefined && resp.height ? resp.height : '');
        setBaseExp(resp && resp !== undefined && resp.base_experience ? resp.base_experience : '');
        setAbilit(resp && resp !== undefined && resp.abilities ? resp.abilities : '');
        fetch(resp.species.url)
        .then(respt => respt.json())
        .then(resptd => {
          console.log('^^^^', resptd);
          setDescription(resptd && resptd !== undefined ? resptd.growth_rate.name.toUpperCase() : '')
        })
        .catch(e => console.log(e))
      })
      .catch(e => console.log(e));

    // fetch('https://pokeapi.co/api/v2/pokemon/1/')
    //   .then(res => res.json())
    //   .then(resp => {
    //     setImages(resp.sprites.other.dream_world.front_default);
    //     // console.log(resp.sprites);
    //   })
    //   .catch(e => console.log(e));
  }, []);

  return (
    <View style={styles.page}>
      <SvgUri
        style={styles.pokeimg}
        width={wp('45%')}
        height={hp('45%')}
        uri={images && images !== undefined ? images : ''}
      />
      <View style={styles.firstHalf}>
        <View style={styles.topView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcon style={styles.back} name="arrow-back" />
          </TouchableOpacity>
          <MaterialIcon style={styles.favorite} name="favorite-border" />
        </View>
        <View style={styles.profileView}>
          <View style={styles.nameView}>
            <Text style={styles.pokename}>
              {name && name !== undefined ? name.toUpperCase() : ''}
            </Text>
            <View style={styles.abilitiesView}>
              {abilities && abilities !== undefined && abilities.length > 0
                ? abilities.map((data, index) => {
                    return (
                      <Text style={styles.abilities}>
                        {data &&
                        data !== undefined &&
                        data.type.name !== undefined
                          ? data.type.name
                          : ''}
                      </Text>
                    );
                  })
                : null}
            </View>
          </View>
          <View style={styles.pokeidView}>
            <Text style={styles.pokeid}>
              #{id && id !== undefined ? id : ''}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.secondHalf}>
        <TopTab height={height} weight={weight} baseExp={baseExp} abilit={abilit} stats={stats} description={description} />
      </View>
    </View>
  );
}

export default DetailPage;
