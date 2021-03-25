import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, Image, ActivityIndicator } from 'react-native'

function NewsScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://quilombosfc-api.herokuapp.com/news')
    .then((response) => response.json())
    .then((json) => setData(json.news))
    .catch((error) => console.warn(error))
    .finally(() => setLoading(false));
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : 
        <FlatList
          keyExtractor={({ id }) => id}
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Image style={styles.image}
                  source={{
                  uri: item.avatarUrl
                }} />
                <View style={styles.container2}>
                  <Text style={styles.category}>{item.category}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>{item.date}</Text>
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
    backgroundColor: '#f4f4f4',
    justifyContent: 'center'
  },
  container2: {
    flex: 1,
    alignItems: 'baseline'
  },
  item: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
    width: '90%',
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
  category: {
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#1C1C1C',
    backgroundColor: '#f47e27',
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 5,
    marginBottom: 8,
    marginLeft: 10
  },
  date: {
    fontSize: 13,
    marginTop: 10,
    marginLeft: 10
  },
  title: {
    width: '93%',
    flexWrap: 'wrap',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4F4F4F',
    marginLeft: 10
  },
  image: {
    width: 170,
    height: 121,
    borderRadius: 5,
    marginLeft: 10
  }
})

export default NewsScreen