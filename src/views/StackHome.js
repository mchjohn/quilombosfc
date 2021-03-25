import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../components/Home'

const Stack = createStackNavigator()

function StackHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default StackHome