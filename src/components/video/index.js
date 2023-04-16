import React from "react";
import { View, Text, TouchableOpacity,SafeAreaView, StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';
import { WebView } from 'react-native-webview';


export function VideoView({handleClose, videoUrl}){
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleClose}>
            <Feather name="arrow-left" size={24} color="#FFF"/>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <WebView
      style={styles.contentView}
      source={{ uri: videoUrl }}
    />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        with: "100%"
    },
    backButton:{
        width: '100%',
        backgroundColor: "#ff7875",
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 14
    },

    backText:{
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 14
    },
    contentView:{
        flex: 1,
        width: '100%'
    }
})