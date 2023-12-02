import React from 'react';
import { ImageBackground, Image, View, Button, Alert, StyleSheet } from 'react-native';


export function Buscar() {
  const handleSearch = () => {
    Alert.alert('Búsqueda', 'Realizar búsqueda');
  };

  const image2 = { uri: 'https://img.freepik.com/vector-gratis/fondo-brillo-iridiscente-degradado_23-2149928479.jpg' };

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



