import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Player from '../components/Player'

const Stack = createStackNavigator()

function StackPlayer() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jogador"
        component={Player}
      />
    </Stack.Navigator>
  )
}

export default StackPlayer