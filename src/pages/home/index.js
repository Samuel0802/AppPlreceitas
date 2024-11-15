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
import {Text as MoviText} from 'moti';



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
            <MoviText
              style={styles.title}
              from={{
                opacity: 0,
                translateY: 15,
              }}
              animate={{
                opacity: 1,
                translateY: 0
              }}

              transition={{
                delay: 100,
                type: 'timing',
                duration: 650
              }}
              >Bem-vindo(a) Localiza Bar</MoviText>
            <MoviText style={styles.subtitle}
               from={{
                opacity: 0,
                translateY: 15,
              }}
              animate={{
                opacity: 1,
                translateY: 0
              }}

              transition={{
                delay: 300,
                type: 'timing',
                duration: 850
              }}
            >Veja os melhores Bares Manaus que separei pra você!</MoviText>

            <View style={styles.form}>

          
                <TextInput 
                placeholder="Digite nome do bar..." 
                style={styles.input}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                onSubmitEditing={Keyboard.dismiss}
                />

                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name="search" size={28} color="#000000" />
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
        color: '#000000',

    }
})