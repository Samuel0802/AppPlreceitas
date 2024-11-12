import React from "react";
import {View, StyleSheet, Text } from "react-native";
import {Text as MoviText} from 'moti';


// LOGO NO CANTO ESQUERDO DO APP LOCALIZA BAR
export function Logo(){
    return(
        <View  
        style={styles.logoArea}
        from={{
            opacity: 0,
            translateX: -50,
          }}
          animate={{
            opacity: 1,
            translateY: 0
          }}

          transition={{
            delay: 200,
            type: 'timing',
            duration: 850
          }}
        >
            <MoviText style={styles.logo}
            >LOCALIZA BAR</MoviText>
        </View>
    );
}

const styles = StyleSheet.create({

    logoArea:{
        backgroundColor: '#41AF64',
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

