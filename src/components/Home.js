import React from 'react'
import {
  View, StyleSheet,
  Text, Image,
  ImageBackground, TouchableOpacity
} from 'react-native'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <View style={styles.bgYellow}></View>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            source={require('../../assets/icons/menu-button.png')}
            style={styles.menuImg}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require('../../assets/images/home-bg.png')}
        style={styles.bgHome}
      >
        <Text style={styles.title}>
          QUILOMBOS DA BOLA FC
        </Text>
        <Image
          source={require('../../assets/images/league-logo-512x512.png')}
          style={styles.bgHomeLogo}
        />
        <View style={styles.containerSubTitles}>
          <Text style={styles.subTitle}>
            ESSE PROJETO SOCIAL É UM ESFORÇO SOLIDÁRIO QUE TEM 
            COMO OBJETIVO MELHORAR ASPECTOS DA SOCIEDADE
            DAS CRIANÇAS E ADOLESCENTES DO BAIRRO CAMPO BELO E
            BAIRROS VIZINHOS
          </Text>
          <Text style={styles.subTitle2}>
            ESTA INICIATIVA POTENCIALIZA A CIDADANIA E CONSCIÊNCIA 
            SOCIAL DOS ATLETASC ENVOLVENDO-OS NA CONSTRUÇÃO DE UM FUTURO
            MELHOR ATRAVÉS DO FUTEBOL
          </Text>
          <Text style={styles.subTitle3}>
            SÁBADO • 08:00 HRS
            CAMPO DO CAMPO BELO
            LAGOINHA, NOVA IGUAÇU
          </Text>
        </View>
        <Image
          source={require('../../assets/images/home-bg-taca.png')}
          style={styles.bgHomeTaca}
        />
        <View style={styles.bgWrite}>
          <Text style={styles.titleVertical}>
            QUILOMBOS FC
          </Text>
        </View>
        <View style={styles.bgWrite2}></View>
        <View style={styles.bgStripe}>
          <Text
            style={styles.versicle}>
              "ENCORAJE OS JOVENS A SEREM PRUDENTES". TITO 2:6
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#579f22'
  },
  bgHome: {
    flex: 1,
  },
  title: {
    color: '#ffd500',
    fontSize: 23,
    position: 'absolute',
    marginLeft: 124
  },
  bgHomeLogo: {
    width: 200,
    height: 200,
    position: 'absolute',
    marginLeft: 170,
    marginTop: 25
  },
  containerSubTitles: {
    flex: 1,
    position: 'absolute',
    marginLeft: 124,
    marginRight: 4,
    marginTop: 225
  },
  subTitle: {
    fontSize: 18,
    color: '#fff'
  },  
  subTitle2: {
    fontSize: 18,
    color: '#ffd500',
    marginBottom: 10
  },
  subTitle3: {
    fontSize: 13,
    color: '#fff'
  },
  bgHomeTaca: {
    flex: 1,
    width: 110,
    height: 85,
    marginLeft: 5
  },
  bgWrite: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 110,
    height: 470,
    backgroundColor: '#fff',
    marginLeft: 5
  },
  bgWrite2: {
    width: 110,
    height: 140,
    backgroundColor: '#fff',
    marginLeft: 5
  },
  titleVertical: {
    alignSelf: 'center',
    color: '#ffd500',
    fontSize: 66,
    width: 470,
    transform: [{ rotate: '-90deg'}]
  },
  bgStripe: {
    width: '100%',
    height: 73,
    position: 'absolute',
    marginTop: 560,
    backgroundColor: '#0000005d',
    justifyContent: 'center'
  },
  versicle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'right',
    marginRight: 15
  },
  menu: {
    flex: 2,
    alignItems: 'flex-end',
    paddingTop: 5,
    paddingRight: 5
  },
  menuImg: {
    width: 40,
    height: 40
  },
  containerMenu: {
    flexDirection: 'row'
  },
  bgYellow: {
    width: 110,
    marginLeft: 5,
    backgroundColor: '#ffd500'
  }
})

export default HomeScreen