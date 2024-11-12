import React from "react";
import { useLayoutEffect, useState } from "react"; //Ele vai deixar abrir o app quando for carregado o assunto tela
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Modal, Share } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign, Feather } from '@expo/vector-icons' //biblioteca de icons
import { Ingredients } from '../../components/ingredients';
import { Instructions } from '../../components/instructions';
import { VideoView } from '../../components/video';
import { isFavorite, RemoviItem, SaveFavorites } from '../../utils/Storange'



export default function Detail() {
    const route = useRoute(); //pagina que Detail pode ter acesso
    const navigation = useNavigation();
    const [showVideo, setShowVideo] = useState(false);
    const [favorite, setFavorite] = useState(false);

    useLayoutEffect(() => {

        async function getStatusFavorites() {
            const receipeFavorite = await isFavorite(route.params?.data)
            setFavorite(receipeFavorite)
        }
        getStatusFavorites();

        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => headleFavoriteReceipe(route.params?.data)}>
                    {favorite ? (
                        <Entypo name="heart" size={28} color="#FF4141" />
                    ) : (
                        <Entypo name="heart-outlined" size={28} color="#FF4141" />
                    )}
                </Pressable>
            )
        })
    }, [navigation, route.params?.data, favorite])

   async function headleFavoriteReceipe(receipe) {
        if (favorite) {
           await RemoviItem(receipe.id)
           setFavorite(false)
        } else {
            await SaveFavorites("@appreceitas", receipe)
            setFavorite(true)
        }
    }


    function handleOpenVideo() {
        setShowVideo(true);
    }


    async function ShareReceipe() { //função de compartilhamento de receitas
        try {
            await Share.share({
                url: "https://google.com.br",
                message: `Receita: ${route.params?.data.name}\nIngredientes: ${route.params?.data.total_ingredients}\nVi lá no app PL Receitas`
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <ScrollView contentContainerStyle={{ paddingBottom: 14 }} style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable onPress={handleOpenVideo}>
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
                    <Text style={styles.ingredientesText}> ({route.params?.data.total_ingredients})</Text>
                </View>

                <Pressable onPress={ShareReceipe}>
                    <Feather name="share-2" size={24} color="#000000" />
                </Pressable>
            </View>

            {route.params?.data.ingredients.map((item) => ( //API DOS INGREDIENTES
                <Ingredients key={item.id} data={item} />
            ))}

            <View style={styles.InstructionsArea}>
                <Text style={styles.InstructionsText}>Informação Detalhada</Text>
                <Feather name="arrow-down" size={24} color="#FFF" />
            </View>

            {route.params?.data.instructions.map((item, index) => (
                <Instructions key={item.id} data={item} index={index} />
            ))}


            <Modal visible={showVideo} animationType="slide">
                <VideoView
                    handleClose={() => setShowVideo(false)}
                    videoUrl={route.params?.data.video}
                />
            </Modal>

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
    Headerdetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },

    InstructionsArea: {
        backgroundColor: "#41AF64",
        flexDirection: 'row',
        padding: 8,
        borderRadius: 5,
        marginBottom: 14
    },

    InstructionsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FFF",
        marginRight: 8

    }


})