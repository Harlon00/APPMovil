import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';

const ListaDesplegable = () => {
  const [lista, setLista] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const generarLista = () => {
    const nuevaLista = ['101','102','103','201','202','203','301', '302', '303','304', '401', '402', '403', '404', '501', '502', '503', '504', '601', '602', '603',];
    setLista(nuevaLista);
    setModalVisible(true);
  };
 
  const seleccionarOpcion = (opcion) => {
    setOpcionSeleccionada(opcion);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={generarLista} style={styles.button}>
        <Text style={styles.buttonText}>
          {opcionSeleccionada ? `Seleccionado: ${opcionSeleccionada}` : 'Cursos'}
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    height:'60%',
    
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
});

export default ListaDesplegable;