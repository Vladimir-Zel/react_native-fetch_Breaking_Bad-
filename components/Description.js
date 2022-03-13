import React from 'react';
import {Image, Text, View} from "react-native-web";
import {globStyle} from "../styles/style";

const Description = ({route}) => {

    return (
        <View style={globStyle.container}>
            <Image source={{uri: route.params.img}} style={globStyle.imageBig}/>
            <View>
                <Text> שם: {route.params.name}</Text>
                <Text> כינוי: {route.params.nickname}</Text>
                <Text> דירוג: {route.params.birthday}</Text>
                <Text> סטטוס: {route.params.status}</Text>
                <Text>מנוסה: {route.params.occupation}</Text>
            </View>
        </View>
    );
};

export default Description;
