import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Ingredients({ data }) {
    return (
        <View style={style.container}>
            <Text style={style.name}>{data.name}</Text>
            <Text>{data.amount}</Text>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 4
    },
    name: {
        fontWeight: 500,
        fontSize: 17,
    }
})