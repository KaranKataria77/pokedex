/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function HomeScreen(props) {
  const {baseExp, height, weight, abilit} = props;
  return (
    <>
      <View style={styles.aboutScreen}>
        <View style={styles.aboutView}>
          <View style={styles.aboutTextView}>
            <Text style={styles.ability}>Height</Text>
            <View style={styles.abilityView}>
              <Text style={styles.abilityText}>
                {height && height ? height : ''}
              </Text>
            </View>
          </View>
          <View style={styles.aboutTextView}>
            <Text style={styles.ability}>Weight</Text>
            <View style={styles.abilityView}>
              <Text style={styles.abilityText}>
                {weight && weight ? weight : ''}
              </Text>
            </View>
          </View>
          <View style={styles.aboutTextView}>
            <Text style={styles.ability}>Base Exp.</Text>
            <View style={styles.abilityView}>
              <Text style={styles.abilityText}>
                {baseExp && baseExp !== undefined ? baseExp : ''}
              </Text>
            </View>
          </View>
          {
            abilit && abilit !== undefined ?
            abilit.map((data, index) => {
              return (
                <View style={styles.aboutTextView}>
            <Text style={styles.ability}>Abilities</Text>
            <View style={styles.abilityView}>
              <Text style={styles.abilityText}>
                {data && data !== undefined ? data.ability.name.toUpperCase() : ''}
              </Text>
            </View>
          </View>
              )
            })
            :
            null
          }
          <View style={styles.aboutTextView1}>
            <Text style={styles.ability1}>More About</Text>
          </View>
          <View style={styles.aboutTextView}>
            <Text style={styles.ability}>laskdl</Text>
            <View style={styles.abilityView}>
              <Text style={styles.abilityText}>lkjsaldj</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

function SettingsScreen(props) {
  const {stats, description} = props;

  return (
    <View style={styles.aboutScreen}>
      <View style={styles.stats}>
        <View style={styles.statsView}>
          <Text style={styles.statsText}>HP</Text>
          <View style={styles.statsValue}>
            <Text style={styles.statsNum}>
              {stats && stats[0] !== undefined ? stats[0].base_stat : ''}
            </Text>
            <View>
              <Progress.Bar
                color="red"
                progress={
                  stats && stats[0] !== undefined
                    ? stats[0].base_stat / 100
                    : ''
                }
                width={200}
              />
            </View>
          </View>
        </View>
        <View style={styles.statsView}>
          <Text style={styles.statsText}>Attack</Text>
          <View style={styles.statsValue}>
            <Text style={styles.statsNum}>
              {stats && stats[1] !== undefined ? stats[1].base_stat : ''}
            </Text>
            <View>
              <Progress.Bar
                color="green"
                progress={
                  stats && stats[1] !== undefined
                    ? stats[1].base_stat / 100
                    : ''
                }
                width={200}
              />
            </View>
          </View>
        </View>
        <View style={styles.statsView}>
          <Text style={styles.statsText}>Defence</Text>
          <View style={styles.statsValue}>
            <Text style={styles.statsNum}>
              {stats && stats[2] !== undefined ? stats[2].base_stat : ''}
            </Text>
            <View>
              <Progress.Bar
                color="red"
                progress={
                  stats && stats[2] !== undefined
                    ? stats[2].base_stat / 100
                    : ''
                }
                width={200}
              />
            </View>
          </View>
        </View>
        <View style={styles.statsView}>
          <Text style={styles.statsText}>Sp. Atk</Text>
          <View style={styles.statsValue}>
            <Text style={styles.statsNum}>
              {stats && stats[3] !== undefined ? stats[3].base_stat : ''}
            </Text>
            <View>
              <Progress.Bar
                color="green"
                progress={
                  stats && stats[3] !== undefined
                    ? stats[3].base_stat / 100
                    : ''
                }
                width={200}
              />
            </View>
          </View>
        </View>
        <View style={styles.statsView}>
          <Text style={styles.statsText}>Sp. Def</Text>
          <View style={styles.statsValue}>
            <Text style={styles.statsNum}>
              {stats && stats[4] !== undefined ? stats[4].base_stat : ''}
            </Text>
            <View>
              <Progress.Bar
                color="red"
                progress={
                  stats && stats[4] !== undefined
                    ? stats[4].base_stat / 100
                    : ''
                }
                width={200}
              />
            </View>
          </View>
        </View>
        <View style={styles.statsView}>
          <Text style={styles.statsText}>Speed</Text>
          <View style={styles.statsValue}>
            <Text style={styles.statsNum}>
              {stats && stats[5] !== undefined ? stats[5].base_stat : ''}
            </Text>
            <View>
              <Progress.Bar
                color="green"
                progress={
                  stats && stats[5] !== undefined
                    ? stats[5].base_stat / 100
                    : ''
                }
                width={200}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.typeView}>
        <Text style={styles.type}>Growth Rate</Text>
        <Text style={styles.typeText}>
          {description && description !== undefined ? description : ''}
        </Text>
      </View>
    </View>
  );
}

function TopTab({stats, description, height, weight, baseExp, abilit}) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator style={styles.tabNav}>
        <Tab.Screen
          options={{
            tabBarLabelStyle: {fontSize: 12, fontWeight: '800'},
          }}
          name="Home"
          children={() => (
            <HomeScreen
              stats={stats}
              height={height}
              weight={weight}
              baseExp={baseExp}
              abilit={abilit}
            />
          )}
          // component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabelStyle: {fontSize: 12, fontWeight: '800'},
          }}
          name="Settings"
          children={() => (
            <SettingsScreen stats={stats} description={description} />
          )}
          // component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TopTab;
