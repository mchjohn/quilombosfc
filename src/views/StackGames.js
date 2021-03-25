import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Games from '../components/Games'

const Stack = createStackNavigator()

function StackGames() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Resultados"
        component={Games}
        options={({ navigation }) => {
          return {
            title: 'Resultado dos Jogos',
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

export default StackGames