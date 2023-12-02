import React, { useState } from 'react';
import { ImageBackground, Image, View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';

export function Horario() {
  const [lista, setLista] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const image2 = { uri: 'https://img.freepik.com/vector-gratis/fondo-brillo-iridiscente-degradado_23-2149928479.jpg' };

  const generarLista = () => {
    const nuevaLista = ['1 Periodo', '2 Periodo', '3 Periodo'];  
    setLista(nuevaLista);
    setModalVisible(true);
  };

  const seleccionarOpcion = (opcion) => {
    setOpcionSeleccionada(opcion);
    setModalVisible(false);
  };

  return (
    <ImageBackground source={image2} resizeMode="cover" style={styles.image2}>
    <View style={styles.container}>
    <Image style={styles.imagelogo} source={require('../assets/escudo.png')} />
      <TouchableOpacity onPress={generarLista} style={styles.button}>
        <Text style={styles.buttonText}>
          {opcionSeleccionada ? `Seleccionado: ${opcionSeleccionada}` : 'Periodo '}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={lista}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => seleccionarOpcion(item)}>
                  <View style={styles.listItem}>
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            
          </View>
        </View>
      </Modal>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#89a194',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '70%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '60%',
    maxHeight: '60%',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },

  image2: {
    flex: 1,
    justifyContent: 'center',

  },

  imagelogo: {
    height:50,
    width:50,
    alignItems: 'center',
    top: '-42%',
    left:'45%',


  },


});

