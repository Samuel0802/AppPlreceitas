import React from "react";
import { View,Text , StyleSheet} from "react-native";

export function Instructions({data, index}){
    return(
    <View style={style.container}>
        <Text style={style.name}>{index+1}- </Text> 
        <Text style={style.text}>{data.text}</Text>
    </View>
//index pq sempre vai começar em 0
    );
}

const style = StyleSheet.create({

    container:{
        flexDirection: 'row',
        padding: 8,
        marginBottom: 14,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18
    },
   text:{
    lineHeight: 20
   }
})