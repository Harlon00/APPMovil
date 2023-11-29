import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, ImageBackground, View, TextInput, Button, StyleSheet, Alert, Image, Text} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import React, { useState } from 'react';

export function Register() {
  const [primernombre, setPrimernombre] = useState('');
  const [segundonombre, setSegundonombre] = useState('');
  const [primerapellido, setPrimerapellido] = useState('');
  const [segundoapellido, setSegundoapellido] = useState('');
  const [documento, setDocumento] = useState('');
  const [numeroCelular, setNumeroCelular] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const [selected, setSelected] = React.useState("");
  const image2 = { uri: 'https://img.freepik.com/vector-gratis/fondo-brillo-iridiscente-degradado_23-2149928479.jpg' };




  //DATOS DE LOS SELECT DEL FORMULARIO//
  const data = [
    { key: '1', value: 'Estudiante' },
    { key: '2', value: 'Profesor' },
    { key: '3', value: 'Coordinador (Admin)' },

  ]


  const data2 = [
    { key: 'T1', value: 'Targeta-Identidad' },
    { key: 'T2', value: 'Cedula' },
    { key: 'T3', value: 'Cedula de extranjeria' },

  ]

  const data3 = [
    { key: '601', value: '601' },
    { key: '602', value: '602' },
    { key: '603', value: '603' },
    { key: '604', value: '604' },
    { key: '701', value: '701' },
    { key: '702', value: '702' },
    { key: '703', value: '703' },
    { key: '704', value: '704' },
    { key: '801', value: '801' },
    { key: '802', value: '802' },
    { key: '803', value: '803' },
    { key: '804', value: '804' },
    { key: '901', value: '901' },
    { key: '902', value: '902' },
    { key: '903', value: '903' },
    { key: '904', value: '904' },
    { key: '1001', value: '1001' },
    { key: '1002', value: '1002' },
    { key: '1003', value: '1003' },
    { key: '1004', value: '1004' },
    { key: '1101', value: '1101' },
    { key: '1102', value: '1102' },
    { key: '1103', value: '1103' },
    { key: '1104', value: '1104' },

  ]



  //VALIDACION DE QUE TODOS LOS CAMPOS ESTEN LLENOS// 

  const handleRegister = () => {
    if (!primernombre || !segundonombre || !primerapellido || !segundoapellido || !documento || !numeroCelular || !correoElectronico) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }
    Alert.alert('Éxito', 'Registro exitoso');
  };

  // VALIDACION DE FORMULARIO//

  const handleDateValidation = () => {
    if (isValid(parseISO(inputDate))) {
      Alert.alert('Fecha válida', 'La fecha ingresada es válida.');
    } else {
      Alert.alert('Fecha inválida', 'La fecha ingresada no es válida. Por favor, ingresa una fecha en formato válido.');
    }
  };

  const handleValidation = () => {
    // Lógica de validación de contraseñas
    if (password.length < 8) {
      Alert.alert('La contraseña debe tener al menos 8 caracteres.');
    } else if (password !== confirmPassword) {
      Alert.alert('Las contraseñas no coinciden.');
    } else {
      setError(''); // Si no hay errores, se borra el mensaje de error
      // Aquí puedes realizar cualquier acción adicional, como enviar la contraseña al servidor, etc.
    }
  };

  const handleTelefono = () => {
    // Validar el número de teléfono con una expresión regular
    const phoneRegex = /^[0-9]{7}$/; // Esta expresión regular asume un número de teléfono de 10 dígitos

    if (phoneRegex.test(phoneNumber)) {
      // Número de teléfono válido, puedes proceder con la lógica de registro

    } else {
      // Número de teléfono no válido, muestra un mensaje de error
      Alert.alert('Número de teléfono no válido. Intenta de nuevo.');
    }
  };



  const validaprimernombre = () => {
    // Verifica si el nombre tiene al menos 3 caracteres
    if (primernombre.length < 3) {
      Alert.alert('Error', 'El Nombre debe tener al menos 3 caracteres');
      return;
    }

    // Verifica si el nombre contiene solo letras (puedes ajustar esto según tus necesidades)
    if (!/^[a-zA-Z]+$/.test(primernombre)) {
      Alert.alert('Error', 'El Nombre solo puede contener letras');
      return;
    }

    // La validación ha pasado, puedes realizar acciones adicionales aquí

  };

  const validasegundonombre = () => {
    // Verifica si el nombre tiene al menos 3 caracteres
    if (segundonombre.length < 3) {
      Alert.alert('Error', 'El Nombre debe tener al menos 3 caracteres');
      return;
    }

    // Verifica si el nombre contiene solo letras (puedes ajustar esto según tus necesidades)
    if (!/^[a-zA-Z]+$/.test(segundonombre)) {
      Alert.alert('Error', 'El Nombre solo puede contener letras');
      return;
    }

    // La validación ha pasado, puedes realizar acciones adicionales aquí

  };

  const validaprimerapellido = () => {
    // Verifica si el nombre tiene al menos 3 caracteres
    if (primerapellido.length < 3) {
      Alert.alert('Error', 'El Nombre debe tener al menos 3 caracteres');
      return;
    }

    // Verifica si el nombre contiene solo letras (puedes ajustar esto según tus necesidades)
    if (!/^[a-zA-Z]+$/.test(primerapellido)) {
      Alert.alert('Error', 'El Nombre solo puede contener letras');
      return;
    }

    // La validación ha pasado, puedes realizar acciones adicionales aquí


  };

  const validasegundopellido = () => {
    // Verifica si el nombre tiene al menos 3 caracteres
    if (segundoapellido.length < 3) {
      Alert.alert('Error', 'El Nombre debe tener al menos 3 caracteres');
      return;
    }

    // Verifica si el nombre contiene solo letras (puedes ajustar esto según tus necesidades)
    if (!/^[a-zA-Z]+$/.test(segundoapellido)) {
      Alert.alert('Error', 'El Nombre solo puede contener letras');
      return;
    }

    // La validación ha pasado, puedes realizar acciones adicionales aquí

  };


  const validarDocumento = () => {
    const longitudDocumento = documento.length;

    if (longitudDocumento >= 6 && longitudDocumento <= 12 && !isNaN(documento)) {
      // Documento válido, aquí puedes realizar acciones adicionales si es necesario

    } else {
      // Documento no válido, muestra un mensaje de error
      Alert.alert('Error', 'El documento debe tener entre 6 y 12 dígitos y ser numérico.');
    }
  };

  const validarNumeroCelular = () => {
    // Expresión regular para validar el número de celular
    const regex = /^[0-9]{10}$/;

    if (!regex.test(numeroCelular)) {
      Alert.alert('Error', 'Ingrese un número de celular válido.');
      return;
    }

    // La validación ha pasado, puedes realizar acciones adicionales aquí

  };

  const validarCorreoElectronico = () => {
    // Expresión regular para validar un correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(correoElectronico)) {
      Alert.alert('Error', 'Ingrese un correo electrónico válido.');
      return;
    }

    // La validación ha pasado, puedes realizar acciones adicionales aquí
    Alert.alert('Éxito', 'Correo electrónico válido');
  };
  return (

    <SafeAreaView >
      <ScrollView >
        <ImageBackground source={image2} resizeMode="cover" style={styles.image2}>

          <View style={styles.container}>
          <Image style={styles.imagelogo} source={require('../assets/escudo.png')} />



            <View style={styles.loglog}>


              <Text style={styles.textoo}>
                <Text style={styles.baseText}>
                  REGI
                  <Text style={styles.innerText}> STER <Image style={styles.image} source={require('../assets/agguser.png')} /> </Text>
                </Text>
              </Text>
            </View>


            <TextInput
              style={styles.input}
              placeholder="Primer Nombre"
              value={primernombre}
              onChangeText={text => setPrimernombre(text)}
              onBlur={validaprimernombre}
              placeholderTextColor={'black'}
            />

            <TextInput
              style={styles.input}
              placeholder="Segundo Nombre"
              value={segundonombre}
              onChangeText={text => setSegundonombre(text)}
              placeholderTextColor={'black'}
              onBlur={validasegundonombre}
            />

            <TextInput
              style={styles.input}
              placeholder="Primer Apellido"
              value={primerapellido}
              onChangeText={text => setPrimerapellido(text)}
              placeholderTextColor={'black'}
              onBlur={validaprimerapellido}
            />


            <TextInput
              style={styles.input2}
              placeholder="Segundo Apellido"
              value={segundoapellido}
              onChangeText={text => setSegundoapellido(text)}
              placeholderTextColor={'black'}
              onBlur={validasegundopellido}

            />

            <SelectList
              setSelected={setSelected}
              data={data}
              save="value"
              placeholder='Selecione su Rol'
              boxStyles={{
                borderColor: 'white', borderWidth: 2, height: 50, width: 344, textAlign: 'center', justifyContent: 'center',
                alignItems: 'center', margin: 20
              }}
              inputStyles={{ fontSize: 14, color: 'black' }}
              dropdownStyles={{ alignItems: 'center' }}
              maxHeight={130}

            />

            <SelectList
              setSelected={setSelected}
              data={data2}
              save="value"
              placeholder='Selecione Tipo de identidad'
              boxStyles={{
                borderColor: 'white', borderWidth: 2, height: 50, width: 344, textAlign: 'center', justifyContent: 'center',
                alignItems: 'center', marginBottom: 20
              }}
              inputStyles={{ fontSize: 14, color: 'black' }}
              dropdownStyles={{ alignItems: 'center' }}
              maxHeight={130}

            />



            <TextInput
              style={styles.input}
              placeholder="Número de documento"
              value={documento}
              keyboardType="numeric"
              onChangeText={text => setDocumento(text)}
              placeholderTextColor={'black'}
              onBlur={validarDocumento}
            />

            <TextInput
              style={styles.input}
              placeholder="Número Celular"
              keyboardType="phone-pad"
              value={numeroCelular}
              onChangeText={text => setNumeroCelular(text)}
              placeholderTextColor={'black'}
              onBlur={validarNumeroCelular}
            />

            <TextInput
              style={styles.input}
              placeholder="Número Telefono"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              placeholderTextColor={'black'}
              onBlur={handleTelefono}
            />


            <TextInput
              style={styles.input2}
              placeholder="Correo Electrónico"
              keyboardType="email-address"
              value={correoElectronico}
              onChangeText={text => setCorreoElectronico(text)}
              placeholderTextColor={'black'}
              onBlur={validarCorreoElectronico}
            />

            <SelectList
              setSelected={setSelected}
              data={data3}
              save="value"
              placeholder='Selecione su curso'
              boxStyles={{
                borderColor: 'white', borderWidth: 2, height: 50, width: 344, textAlign: 'center', justifyContent: 'center',
                alignItems: 'center', margin: 20
              }}
              inputStyles={{ fontSize: 14, color: 'black' }}
              dropdownStyles={{ alignItems: 'center' }}
              maxHeight={130}

            />

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={text => setPassword(text)}
              placeholderTextColor={'black'}
              onBlur={handleValidation}
              secureTextEntry
            />

            <TextInput
              style={styles.input}
              placeholder="Verificar Contraseña"
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              placeholderTextColor={'black'}
              onBlur={handleValidation}
              secureTextEntry

            />


            


            <Button title="Registrar" onPress={handleRegister} />

          </View>

        </ImageBackground>
      </ScrollView>
    </SafeAreaView>

        
  );
}

const styles = StyleSheet.create({
  textoo: {
    padding: 5,
    fontSize: 25,

  },
  loglog: {
    flexDirection: 'row',
    height: 120,


  },

  image: {

    height: 60,
    width: 60,
    alignItems: 'center',



  },

  baseText: {
    fontWeight: 'bold',
    letterSpacing: 10,

  },
  innerText: {
    color: 'blue',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 10,
    textAlign: 'center',


  },

  input2: {
    height: 50,
    width: '100%',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',

  },

  styleselect: {
    flex: 1,
    margin: 1,


  },

  image2: {
    flex: 1,
    justifyContent: 'center',

  },

  imagelogo: {
    height:50,
    width:50,
    alignItems: 'center',
    left: 160,
    top:-10
  },
});