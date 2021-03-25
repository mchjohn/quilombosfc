import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


export default props => {
  const urlJogador = props.route.params.urlJogador
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000', '#0f0c29' , '#24243e']}
        style={styles.linearGradient}
      >
      
        <Text style={styles.name}>{props.route.params.name}</Text>

        <ImageBackground
          source={{
            uri: urlJogador
          }}
          style={styles.bgJogador}
        >
          <Text style={styles.position}>{props.route.params.position}</Text>

          <View style={styles.frostedContainer}>
            <View style={styles.frostedItem}>
              <Text style={styles.frostedLabel}>Idade</Text>
              <Text style={styles.frostedParam}>{props.route.params.age}</Text>
            </View>
            <View style={styles.frostedItem}>
              <Text style={styles.frostedLabel}>Jogos</Text>
              <Text style={styles.frostedParam}>{props.route.params.played}</Text>
            </View>
            <View style={styles.frostedItem}>
              <Text style={styles.frostedLabel}>Gols</Text>
              <Text style={styles.frostedParam}>{props.route.params.gols}</Text>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  linearGradient: {
    flex: 1
  },
  bgJogador: {
    flex: 1,
    width: 400,
    height: '195%'
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8F8FF',
    margin: 20,
    textAlign: 'center'
  },
  position: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.459)',
    marginHorizontal: 20,
    marginTop: '40%'
  },
  frostedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 50
  },
  frostedItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.397)',
    width: 100,
    height: 100,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  frostedLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8F8FF',
    textAlign: 'left'
  },
  frostedParam: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F8F8FF',
    textAlign: 'right'
  }
})