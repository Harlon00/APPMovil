import React from 'react';
import { ImageBackground, Image, View, Button, Alert, StyleSheet } from 'react-native';


export function Buscar() {
  const handleSearch = () => {
    Alert.alert('Búsqueda', 'Realizar búsqueda');
  };

  const image2 = { uri: 'https://image.slidesdocs.com/responsive-images/background/business-simple-gradient-blue-technology-light-blue-powerpoint-background_f6faa583ee__960_540.jpg' };

  return (
    <ImageBackground source={image2} resizeMode="cover" style={styles.image2}>
    <View style={styles.container}>
    <Image style={styles.imagelogo} source={require('../assets/escudo.png')} />
      <Button title="Buscar" onPress={handleSearch} color="#89a194" />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  image2: {
    flex: 1,
    justifyContent: 'center',

  },

  imagelogo: {
    height:50,
    width:50,
    alignItems: 'center',
    top: '-380%',
    left:'90%',


  },

});



