import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './pages/Login'
import { Cuenta, Perfil } from './pages/Perfil'
import { Register } from './pages/Register'
import { PanelAdmin } from './pages/PanelAdmin';
import { Buscar } from './pages/Buscar';
import { Cursos } from './pages/Cursos';
import { Horario } from './pages/Horario';

const Menu = createDrawerNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Login' component={Login}/>
        <Menu.Screen name='Perfil' component={Perfil}/>
        <Menu.Screen name='Register' component={Register}/>
        <Menu.Screen name='PanelAdmin' component={PanelAdmin}/>
        <Menu.Screen name='Buscar' component={Buscar}/>
        <Menu.Screen name='Cursos' component={Cursos}/>
        <Menu.Screen name='Horario' component={Horario}/>
        
      </Menu.Navigator>
    </NavigationContainer>

  );
}

