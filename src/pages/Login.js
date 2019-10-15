import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import logo from '../assets/logo.png'

export default function Login(){
    return (
    <View style={style.container}>
        <Image source={logo}></Image>    

        <View style={style.form}>
            <Text style={style.label}>SEU E-MAIL *</Text>
            <TextInput
                style={style.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Text style={style.label}>TECNOLOGIAS *</Text>
            <TextInput
                style={style.input}
                placeholder="Tecnologias de interesse"
                placeholderTextColor="#999"            
                autoCapitalize="words"
                autoCorrect={false}
            />





        </View>

        
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',   
        alignItems: 'center',   
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,      
        marginTop: 30, 
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
})