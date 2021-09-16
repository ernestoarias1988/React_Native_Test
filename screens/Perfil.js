import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

const Perfil = ({route}) => {
    const{params} = route;
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
    <View
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.titulo}> Perfil:</Text>
        <Text style={styles.perfil}> Nombre: {params?.nombre}</Text>
        <Text style={styles.perfil}> Apellido: {params?.apellido}</Text>
        <Text style={styles.perfil}> Email: {params?.email}</Text>
        <Text style={styles.perfil}> Fecha de Nacieminto: {params?.fnac}</Text>
        <Text style={styles.perfil}> DNI: {params?.dni}</Text>
    </View> 
    );
}

const styles = StyleSheet.create({
    perfil: {
      height: 40,
      margin: 10,
      padding: 0,
    },
    titulo:
    {   
        fontSize: 30,
        padding: 10,
    }
  });
export default Perfil;