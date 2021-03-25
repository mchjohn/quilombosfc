import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import News from '../components/News'

const Stack = createStackNavigator()

function StackNews() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notícias"
        component={News}
        options={({ navigation }) => {
          return {
            title: 'Notícias do Clube',
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

export default StackNews