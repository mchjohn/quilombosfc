import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import StackHome from './views/StackHome'
import StackPlayers from './views/StackPlayers'
import StackGames from './views/StackGames'
import StackNews from './views/StackNews'

const Drawer = createDrawerNavigator()
  
export default props => (
  <NavigationContainer style={styles.container}>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle= {{
        backgroundColor: '#579f22',
        opacity: 0.98
      }}
      drawerContentOptions={{
        activeBackgroundColor: '#2b4e14',
        activeTintColor: '#fff',
        inactiveTintColor: '#1C1C1C',
        labelStyle: {
          fontSize: 20
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackHome}
      />
      <Drawer.Screen
        name="Jogadores"
        component={StackPlayers}
      />
      <Drawer.Screen
        name="Jogos"
        component={StackGames}
      />
      <Drawer.Screen
        name="Notícias"
        component={StackNews}
      />
    </Drawer.Navigator>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
})