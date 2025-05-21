import { Image, Text, TextInput, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

export default function Register() {
  const [userType, setUserType] = useState('');

  function selecionarTipoUsuario(tipo) {
    setUserType(tipo);
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    }}>
      <Image source={require('../assets/images/logo.png')} style={{ width: 100, height: 100 }} />
      <View>

        <TextInput placeholder='Nome' />
        <TextInput placeholder='Cpf' />
        <TextInput placeholder='E-mail' />
        <TextInput placeholder='Foto' />

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={style.radio} onPress={function () { selecionarTipoUsuario('usuario') }}>
            <View style={style.radioCircle}>
              {userType === 'usuario' && <View style={style.selectedRb} />}
            </View>
            <Text>Usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.radio} onPress={function () { selecionarTipoUsuario('profissional') }}>
            <View style={style.radioCircle}>
              {userType === 'profissional' && <View style={style.selectedRb} />}
            </View>
            <Text>Profissional</Text>
          </TouchableOpacity>
        </View>


        {userType === 'profissional' && (
          <View>

            <Picker
              selectedValue={''}
              onValueChange={function () { }}
            >
              <Picker.Item label="Selecione a profissão" value="" />
            </Picker>

            <Picker
              selectedValue={''}
              onValueChange={function () { }}
            >
              <Picker.Item label="Selecione o estado" value="" />
            </Picker>

            <Picker
              selectedValue={''}
              onValueChange={function () { }}
            >
              <Picker.Item label="Selecione a cidade" value="" />
            </Picker>
          </View>
        )}

        <Button title="Cadastrar" onPress={function () { }} />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Link style={style.link} href="/login">Fazer login</Link>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  link: {
    color: 'blue',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },

  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },

})
