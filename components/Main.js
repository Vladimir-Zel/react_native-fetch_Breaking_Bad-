import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, View} from "react-native";
import {globStyle} from "../styles/style";
import {ActivityIndicator, Image, TouchableOpacity} from "react-native-web";
import {API} from "../utils/API";

const Main = ({navigation}) => {

    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    function sortByName(obj) {
        obj.sort((a, b) => {
            return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
        });
    }

    const getMoviesFromApiAsync = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            sortByName(json)
            setMovies(json)
        } catch (error) {
            console.error('Could not fetch. ' + error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMoviesFromApiAsync(API)
    }, [])

    return (
        <View style={globStyle.main}>
            <Text style={globStyle.title}>All movies</Text>
            {isLoading ? <ActivityIndicator size="large"/> : (
                <FlatList data={movies} keyExtractor={({char_id}) => char_id} renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Description', item)}>
                        <View style={globStyle.container}>
                            <Image style={globStyle.image} source={{uri: item.img}}/>
                            <View style={{flex: 1}}>
                                <Text style={globStyle.text}> שם: {item.name}</Text>
                                <Text style={globStyle.text}> דירוג: {item.birthday}</Text>
                                <Text style={globStyle.text}> סטטוס: {item.status}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}>
                </FlatList>
            )}
        </View>
    );
};

export default Main;
