import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './pages/Login'
import { Cuenta, Perfil } from './pages/Perfil'
import { Acercade } from './pages/Acercade'
import { Register } from './pages/Register'
import { PanelAdmin } from './pages/PanelAdmin';


const Menu = createDrawerNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Login' component={Login}/>
        <Menu.Screen name='Perfil' component={Perfil}/>
        <Menu.Screen name='Register' component={Register}/>
        <Menu.Screen name='PanelAdmin' component={PanelAdmin}/>
        <Menu.Screen name='Reportar un problema' component={Acercade}/>
      </Menu.Navigator>
    </NavigationContainer>

  );
}

