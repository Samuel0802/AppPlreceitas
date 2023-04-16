import React, {useState, useEffect} from "react";
import {
     View,
      Text,
       StyleSheet,
        SafeAreaView,
         TextInput,
           TouchableOpacity,
           Keyboard,
            TouchableWithoutFeedback,
             FlatList } from "react-native";
import { Logo } from "../../components/logo";
import { Ionicons } from '@expo/vector-icons';
import api from "../../services/api";
import {FoodList} from "../../components/foodlist"
import {useNavigation} from '@react-navigation/native'



export default function Home() {

      // useState da lupa de pesquisa
     const [inputValue, setInputValue] = useState("");
     const [foods, setFoods] = useState([]);

     const navigation = useNavigation();

     useEffect(() => {
     async function fetchApi(){
   const response = await api.get("/foods") //função que vai buscar nossa api na /foods
     
      setFoods(response.data)
     } 
     fetchApi();
     }, [])
     
     function handleSearch(){
        if(!inputValue)return;
        let input = inputValue;

         setInputValue("")
        navigation.navigate("Search", {name: input})

     }
//


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.title}>Bem-vindo(a) a PL Receitas</Text>
            <Text style={styles.subtitle}>Veja as receitas que separei pra você!</Text>

            <View style={styles.form}>

                <TextInput 
                placeholder="Digite nome da receita..." 
                style={styles.input}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                onSubmitEditing={Keyboard.dismiss}
                />

                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name="search" size={28} color="#ff7875" />
                </TouchableOpacity>
            </View> 

               <FlatList 
                  data={foods}
                  keyExtractor={(item) => String(item.id)}
                  renderItem={({item}) => <FoodList data={item}/> }
                  showsVerticalScrollIndicator={false}
                 />
        </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1, //função que vai garanti que container fica com espaço da tela inteira
        backgroundColor: '#F3F9FF',
        paddingTop: 36,
        paddingStart: 14, //colocando espaço do lado esquerdo da tela do celular
        paddingEnd: 14 //colocando espaço do lado direito da tela do celular
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#4c6b7f'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4c6b7f'
    },
    form: {
        backgroundColor:"#fff",
        width: "100%",
        borderRadius: 5,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ececec',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input:{
        width: '90%',
        height: 54,
        maxWidth: '90%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff7875',

    }
})