import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native'

function GameScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://quilombosfc-api.herokuapp.com/games')
    .then((response) => response.json())
    .then((json) => setData(json.games))
    .catch((error) => console.warn(error))
    .finally(() => setLoading(false));
  }, [])

  return (
    <View  style={styles.container}>
      {isLoading ? <ActivityIndicator /> : 
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <View style={styles.containerItems}>
                  <View style={styles.containerTeams}>
                    <Image style={styles.shield} source={{
                        uri: item.urlTeam1
                      }}
                    />
                    <Text style={styles.teamName}>{item.team1}</Text>
                  </View>

                  <Text style={styles.result}>
                    {item.goalsTeam1} - {item.goalsTeam2}
                  </Text>

                  <View style={styles.containerTeams}>
                    <Image style={styles.shield} source={{
                        uri: item.urlTeam2
                      }}
                    />
                    <Text style={styles.teamName}>{item.team2}</Text>
                  </View>
                </View>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            )
          }}
        />
      }
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 20,
    padding: 20,
    width: '90%',
    height: 170,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  containerItems: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerTeams: {
    alignItems: 'center'
  },
  shield: {
    width: 90,
    height: 90
  },
  result: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#363636',
    alignSelf: 'center'
  },
  teamName: {
    fontFamily: 'Lato Black',
    fontSize: 20,
    color: '#363636'
  },
  date: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e8fff8a',
    marginVertical: 10,
    textAlign: 'center'
  }
})

export default GameScreen