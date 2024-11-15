import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import {GetFavorites} from '../../utils/Storange';
import { useIsFocused } from "@react-navigation/native";
import {FoodList} from '../../components/foodlist';


export default function Favorites(){
  const [receipes, setReceipes] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {

        let isActive = true ;


         async function getReceipes(){
     const result = await GetFavorites("@appreceitas")
       
       if(isActive){
        setReceipes(result);
       }
         }


         if(isActive){
        getReceipes();
         }
  return () => {
    isActive = false;
  }
       
  },[isFocused])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bares Favoritos</Text>
            {receipes.length === 0 && (
                <Text>Você ainda não tem bares salvo.</Text>
            )}

            <FlatList 
            showsVerticalScrollIndicator={false}
            style={{marginTop: 14}}
            data={receipes}
            keyExtractor={(item) => String(item.id)}
            renderItem={( {item}) => <FoodList data={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

 container:{
flex: 1,
backgroundColor: "#F3F9FF",
paddingStart: 14,
paddingEnd:  14,
paddingTop: 36
 },
 title: {
 color: "#000",
 fontWeight: 'bold',
 fontSize: 24
 }
})