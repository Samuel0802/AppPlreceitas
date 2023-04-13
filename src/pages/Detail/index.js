import React from "react";
import { useLayoutEffect } from "react"; //Ele vai deixar abrir o app quando for carregado o assunto tela
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign, Feather } from '@expo/vector-icons' //biblioteca de icons
import {Ingredients} from '../../components/ingredients';
import {Instructions} from '../../components/instructions';



export default function Detail() {
    const route = useRoute(); //pagina que Detail pode ter acesso
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            // headerRight serve pra colocar algum icon ao lado direito do header
            headerRight: () => (
                <Pressable onPress={() => console.log("Testando botão")}>
                    <Entypo name="heart" size={28} color="#FF4141" />
                </Pressable>
            )
        })
    }, [navigation, route.params?.data])


    return (

        <ScrollView contentContainerStyle={{paddingBottom: 14}} style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable>
                <View style={styles.playIcon}>
                    <AntDesign name="playcircleo" size={48} color="#FAFAFA" />
                </View>
                <Image
                    source={{ uri: route.params?.data.cover }}
                    style={styles.cover}
                />
            </Pressable>


            <View style={styles.Headerdetails}>
                <View>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <Text style={styles.ingredientesText}>ingredientes ({route.params?.data.total_ingredients})</Text>
                </View>

                <Pressable>
                  <Feather name="share-2" size={24} color="#ff7875"/>
              </Pressable>
            </View>
    
        {route.params?.data.ingredients.map((item) => ( //API DOS INGREDIENTES
            <Ingredients key={item.id} data={item}/>
        ))} 

        <View style={styles.InstructionsArea}> 
            <Text style={styles.InstructionsText}>Modo de Preparo</Text>
            <Feather name="arrow-down" size={24} color="#FFF"/>
         </View>

         {route.params?.data.instructions.map((item, index) => (
            <Instructions key={item.id} data={item} index={index}/>
        ))} 

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F3F9FF',
        paddingEnd: 14,
        paddingTop: 14,
        paddingStart: 14,
        paddingEnd: 14
    },
    cover: {
        height: 200,
        borderRadius: 14,
        width: '100%'
    },
    playIcon: {
        position: "absolute",
        zIndex: 9,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        marginTop: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4
    },
    ingredientesText: {
        marginBottom: 14,
        fontSize: 16,
    },
    Headerdetails:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 14
    },

    InstructionsArea:{
        backgroundColor: "#ff7875",
        flexDirection: 'row',
        padding: 8,
        borderRadius: 5,
        marginBottom: 14
    },

    InstructionsText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FFF",
        marginRight: 8

    }


})