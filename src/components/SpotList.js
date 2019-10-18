import React, { useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'

import api from '../services/api'

export default withNavigation(SpotList)

function SpotList({ tech, navigation }){
    const [spots, setSpots] = useState([])
    useEffect(()=>{
        api.get('/spots', {params: { techs: tech }})
                .then((res) => {setSpots(res.data)})
    },[])
    function handleNavigate(id){
        console.log(id)
        navigation.navigate('Book', { id })
    }

    const baseUrl = api.defaults.baseURL

    return(
        <View style={style.container}>
            <Text style={style.title}>Empresas que usam <Text style={style.bold}>{tech}</Text></Text>
            <FlatList            
                style={style.list} 
                data={spots}    
                keyExtractor={ (spot) => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={style.listItem}>
                        <Image style={style.thumbnail} source={{ uri: `${baseUrl}/files/${item.thumbnail}` }} />
                        <Text style={style.company}>{item.company}</Text>
                        <Text style={style.price}>{item.price ? `R$${item.price}/dia` : 'GRATUITO' }</Text>
                        <TouchableOpacity onPress={() => handleNavigate(item._id)} style={style.button}>
                            <Text style={style.buttonText}>Solicitar reserva</Text>
                        </TouchableOpacity>
                    </View>
                    )}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 30

    },
    title:{
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold:{
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 20,    
    },
    listItem: {
        marginRight: 15,
    },
    thumbnail:{
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },
    company:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    price: {
        fontSize: 15,
        color: '#999',
        marginTop: 5
    },
    button:{
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15,
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },

})