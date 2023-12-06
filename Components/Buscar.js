import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const BuscarBiton = () => {
  const handleSearch = () => {
    Alert.alert('Búsqueda', 'Realizar búsqueda');
  };

  return (
    <View style={styles.container}>
      <Button title="Buscar" onPress={handleSearch} color="#89a194" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default BuscarBiton;