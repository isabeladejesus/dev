import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

// Componente principal
export default function Onze() {
  return (
    <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Testes de componentes</Text>
    </View>
  );
}


// Componente do Cabeçalho
export function Cabecalho() {
  return (
    <View style={{ alignItems: 'center', marginBottom: 20, padding: 10, borderRadius: 8 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'red' }}>Login</Text>
    </View>
  );
}

// Componente do Corpo
export function Corpo() {
  return (
    <View style={{backgroundColor:'gray', marginBottom: 20, padding: 10, borderRadius: 8, borderTopWidth:5, borderTopColor:'red', }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>E-mail</Text>
      <TextInput placeholder="Digite seu e-mail" style={styles.TextInput}/>
      <Text style={styles.Text}>Senha</Text>
      <TextInput style={styles.TextInput} placeholder="Digite sua senha" secureTextEntry /><br></br>
      <Button  title="Enviar" onPress={() => alert('Enviado!')} />
    </View>
  );
}

// Componente do Rodapé
export function Rodape() {
  return (
    <View style={{ marginBottom: 20, padding: 10, borderRadius: 8 }}>
      
    </View>
  
  );
}

const styles = StyleSheet.create({
  TextInput:{backgroundColor: 'white', height: 40, padding: 5, marginTop: 10, borderRadius: 5, borderWidth: 1, borderColor: '#ccc' },
  Text:{ fontSize: 20, fontWeight: 'bold', color: 'black' },
});