import React from "react";
import { View, StyleSheet, Text } from "react-native";


export function Logo(){
    return(
        <View  style={styles.logoArea}>
            <Text style={styles.logo}>PL RECEITAS</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    logoArea:{
        backgroundColor: '#ff7875',
        alignSelf: "flex-start",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius:8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },
    logo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FFF"
    }
})

