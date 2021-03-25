import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Players from '../components/Players'
import Player from '../components/Player'

const Stack = createStackNavigator()

function StackPlayers({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jogadores"
        component={Players}
        options={({ navigation }) => {
          return {
            title: 'Jogadores do Clube',
            headerStyle: {
              backgroundColor: '#0b0a15'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'right',
              marginRight: 15
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
              >
                <Image
                  source={require('../../assets/icons/arrow.png')}
                  style={styles.arrowBack}
                />
              </TouchableOpacity>
            )
          }
        }}
      />
      <Stack.Screen
        name="Jogador"
        component={Player}
        options={({ navigation}) => {
          return {
            title: 'Informações do Jogador',
            headerStyle: {
              backgroundColor: '#0b0a15'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'right',
              marginRight: 15
            },
            headerLeft: () => (
              <TouchableOpacity
              onPress={() => navigation.navigate('Jogadores')}
              >
                <Image
                  source={require('../../assets/icons/arrow.png')}
                  style={styles.arrowBack}
                />
              </TouchableOpacity>
            )
          }
        }}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  arrowBack: {
    width: 45,
    height: 45,
    marginLeft: 20
  }
})

export default StackPlayers