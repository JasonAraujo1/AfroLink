import { Image, Text, TextInput, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';

export default function Register() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const [nome_completo, setNomeCompleto] = useState('');
  const [tipo, setTipo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');

  const router = useRouter();

  function selecionarOpcao(opcao) {
    setOpcaoSelecionada(opcao);
    setTipo(opcao);
  }

  async function handleRegister() {
    const data = {
      nome_completo: nome_completo,
      tipo: tipo,
      telefone: telefone,
      email: email,
      senha: senha,
      cpf: cpf,
      cidade: cidade,
      estado: estado,
      bairro: bairro,
      endereco: endereco,
      complemento: complemento,
    }
    const url = "https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users"

    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const res = await req.json()

    alert("Usuário cadastrado!")
    router.push("/login")
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

        <TextInput placeholder='Nome completo' onChangeText={setNomeCompleto} />
        <TextInput placeholder='Tipo' onChangeText={setTipo}/>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={style.radio}
            onPress={function () { selecionarOpcao('comum') }}
          >
            <View style={style.radioCircle}>
              {opcaoSelecionada === 'comum' && <View style={style.selectedRb} /> }
            </View>
            <Text>Comum</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.radio}
            onPress={function () { selecionarOpcao('profissional') }}
          >
            <View style={style.radioCircle}>
              {opcaoSelecionada === 'profissional' && <View style={style.selectedRb} />}
            </View>
            <Text>Profissional</Text>
          </TouchableOpacity>
        </View>

        <TextInput placeholder='Telefone' onChangeText={setTelefone} />
        <TextInput placeholder='E-mail' onChangeText={setEmail}/>
        <TextInput placeholder='Senha' onChangeText={setSenha}/>
        <TextInput placeholder='Cpf' onChangeText={setCpf}/>
        <TextInput placeholder='Cidade' onChangeText={setCidade}/>
        <TextInput placeholder='Estado' onChangeText={setEstado}/>
        <TextInput placeholder='Bairro' onChangeText={setBairro}/>
        <TextInput placeholder='Endereco' onChangeText={setEndereco}/>
        <TextInput placeholder='Complemento' onChangeText={setComplemento}/>

        <Button title="Cadastrar" onPress={function () { handleRegister() }} />
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
