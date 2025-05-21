import { Image, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

export default function Register() {
  const [userType, setUserType] = useState('');
  const [profissao, setProfissao] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  function selecionarTipoUsuario(tipo: string) {
    setUserType(tipo);
  }

  return (
    <View style={style.container}>
      <Image source={require('../assets/images/logo.png')} style={{ width: 100, height: 100 }} />
      <View>
        <Text>Nome</Text>
        <TextInput placeholder='Nome' />

        <Text>CPF</Text>
        <TextInput placeholder='Cpf' />

        <Text>Email</Text>
        <TextInput placeholder='E-mail' />

        <Text>Foto (URL)</Text>
        <TextInput placeholder='Foto' />

        <Text>Selecione seu tipo de cadastro:</Text>

        <TouchableOpacity onPress={function() { selecionarTipoUsuario('profissional') }}>
          <Text>Profissional {userType === 'profissional' ? '(Selecionado)' : ''}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={function() { selecionarTipoUsuario('usuario') }}>
          <Text>Usuário {userType === 'usuario' ? '(Selecionado)' : ''}</Text>
        </TouchableOpacity>

        {userType === 'profissional' && (
          <View>
            <Text>Profissão</Text>
            <Picker
              selectedValue={profissao}
              onValueChange={(itemValue) => setProfissao(itemValue)}
            >
              <Picker.Item label="Selecione a profissão" value="" />
              <Picker.Item label="Advogado" value="advogado" />
              <Picker.Item label="Engenheiro" value="engenheiro" />
              <Picker.Item label="Designer" value="designer" />
            </Picker>

            <Text>Estado</Text>
            <Picker
              selectedValue={estado}
              onValueChange={(itemValue) => setEstado(itemValue)}
            >
              <Picker.Item label="Selecione o estado" value="" />
              <Picker.Item label="São Paulo" value="sp" />
              <Picker.Item label="Rio de Janeiro" value="rj" />
              <Picker.Item label="Maranhão" value="ma" />
            </Picker>

            <Text>Cidade</Text>
            <Picker
              selectedValue={cidade}
              onValueChange={(itemValue) => setCidade(itemValue)}
            >
              <Picker.Item label="Selecione a cidade" value="" />
              <Picker.Item label="São Luís" value="sao_luis" />
              <Picker.Item label="Rio de Janeiro" value="rio" />
              <Picker.Item label="São Paulo" value="sp" />
            </Picker>
          </View>
        )}

        <Button title="Cadastrar" onPress={function() {}} />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Link style={style.link} href="/register">Fazer login</Link>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  link: {
    color: 'blue',
  }
});
