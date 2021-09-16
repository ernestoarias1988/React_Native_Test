import React from "react";
import { StyleSheet, Text, View,} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';



export default function Header(){
    return(
    <View style={styles.header}>
        <MaterialIcons name='pets'size={60} alignItems='center' />
    </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '96%',
        alignItems: "center",
        padding: 5,
        justifyContent: "center"
    },
})