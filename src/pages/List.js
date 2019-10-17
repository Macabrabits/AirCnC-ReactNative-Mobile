import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Image, SafeAreaView, AsyncStorage, ScrollView } from 'react-native';

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List(){
    const [techs, setTechs] = useState([])
    
    useEffect(()=>{
        
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim())
            setTechs(techsArray)
        })
    },[])
    return (
        <SafeAreaView style={style.container}>
            <Image source={logo} style={style.logo}/> 

            <ScrollView>
            {techs.map((tech, i) => <SpotList key={i} tech={tech}/>)}
            </ScrollView>
                    
        </SafeAreaView>
        )
    }

    const style = StyleSheet.create({
        container: {
            flex: 1,
        },

        logo: {
            height: 32,
            resizeMode: "contain",
            alignSelf: 'center',
            marginTop: 30 ,
        },
    })