import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BuscarBiton from '../Components/Buscar';
import ListaGenerada from '../Components/Cursos'
import Horariobonito from '../Components/Horario';


export function Horario() {
  return (

    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.componentesv}>
          <ListaGenerada />
          <Horariobonito />
          <BuscarBiton/>
        </View>
    </View>

        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3c9c1',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  componentesv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%', 
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
  },
});