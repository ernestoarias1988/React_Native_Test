import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView,Text, Button, TextInput, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';



const Formulario = (props) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setMail] = useState('');
    const [fnac, setFnac] = useState('');
    const [dni, setDni] = useState('');
    

    //DatePicker
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode({mode});
      };


    state = { date: new Date() }
    return (
        
    <SafeAreaView
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Formulario</Text>

        <TextInput 
        style={styles.input}
        placeholder="Nombre"
        onChangeText={nombre => setNombre(nombre)}
        defaultValue={nombre}
        />
        
        <TextInput 
        style={styles.input}
        placeholder="Apellido"
        onChangeText={apellido => setApellido(apellido)}
        defaultValue={apellido}
        />

        <TextInput 
        style={styles.input}
        placeholder="Email"
        onChangeText={email => setMail(email)}
        defaultValue={email}
        />

     
      
        
        {show && (
        <DateTimePicker
          testID="datePicker"
          value={date}
          mode={date}
          display="default"
          onChange={onChange}
        />
        
        )}
        
        
         <TextInput style={styles.input}
         onChangeText={fnac => setFnac(fnac)}
         onTouchStart={showDatepicker}>
         {date.toLocaleDateString(undefined, options)}
         
         </TextInput>
        
        <TextInput
        style={styles.input}
        placeholder="DNI"
        onChangeText={dni => setDni(dni)}
        defaultValue={dni}
        keyboardType="numeric"
        />

            
        <Button
        title="Registro"
        onPress={() => props.navigation.navigate('Perfil', {nombre,apellido,email,fnac: date.toLocaleDateString(undefined, options),dni})}
        />

    <StatusBar style="auto" />
    </SafeAreaView>
    
    );

    
}

const styles = StyleSheet.create({
    input: {
      width: 200,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Formulario;