import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet,
  FlatList, Image, ActivityIndicator, TouchableOpacity
} from 'react-native'

function PlayersScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://quilombosfc-api.herokuapp.com/players')
    .then((response) => response.json())
    .then((json) => setData(json.players))
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
                <Image style={styles.avatar}
                  source={{
                    uri: item.url
                  }}
                />
                  <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Jogador', item)}
                    >
                      <Text style={styles.subTitle}>Clique para detalhes</Text>
                    </TouchableOpacity>
                  </View>
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
    backgroundColor: '#FFFFFF',
    paddingTop: 20
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 30,
    padding: 20,
    width: '90%',
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.30,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#363636'
  },
  subTitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#8B8682',
    width: 100
  },
  avatar: {
    marginTop: -40,
    width: 168,
    height: 168
  }
})

export default PlayersScreen