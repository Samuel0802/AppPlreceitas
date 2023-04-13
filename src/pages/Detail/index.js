import React from "react";
import { useLayoutEffect } from "react"; //Ele vai deixar abrir o app quando for carregado o assunto tela
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation} from "@react-navigation/native";
import {Entypo} from '@expo/vector-icons'



export default function Detail(){
    const route = useRoute(); //pagina que Detail pode ter acesso
    const navigation = useNavigation();

useLayoutEffect(() => {
 navigation.setOptions({
    title:  route.params?.data ? route.params?.data.name : "Detalhes da receita",
    // headerRight serve pra colocar algum icon ao lado direito do header
    headerRight: () => (
        <Pressable onPress={() => console.log("Testando botão")}>
        <Entypo name="heart" size={28} color="#FF4141"/>
        </Pressable>
    )
 })
},[navigation, route.params?.data])


    return(
        <View style={styles.container}>
            <Text>Página Detalhes da Receita</Text>
            <Text>{route.params?.data.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

 container:{
backgroundColor: 'green',
 }
})