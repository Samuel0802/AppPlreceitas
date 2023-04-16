import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {useRoute} from '@react-navigation/native';


export default function Search(){
    return(
        <View style={styles.container}>
            <Text>Página buscar</Text>
        </View>
    );
}

const styles = StyleSheet.create({

 container:{
backgroundColor: 'blue',
 }
})