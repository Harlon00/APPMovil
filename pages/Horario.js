import { StatusBar } from 'expo-status-bar';
import { ImageBackground , StyleSheet, Text, View } from 'react-native';
import BuscarBiton from '../Components/Buscar';
import ListaGenerada from '../Components/Cursos'
import Horariobonito from '../Components/Horario';

const image2 = { uri: 'https://image.slidesdocs.com/responsive-images/background/business-simple-gradient-blue-technology-light-blue-powerpoint-background_f6faa583ee__960_540.jpg' };


export function Horario() {
  return (

    <ImageBackground source={image2} resizeMode="cover" style={styles.image2}>

    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.componentesv}>
          <ListaGenerada />
          <Horariobonito />
          <BuscarBiton/>
        </View>
    </View>

    </ImageBackground>

        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  image2: {
    flex: 1,
    justifyContent: 'center',

  },

  componentesv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%', 
   
    borderRadius: 8,
    padding: 10,
  },
});