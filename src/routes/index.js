import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from  '../pages/home';
import Favorites from '../pages/Favorites';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, //função pra tirar header da navegação
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false, //função pra esconder nome do icon
                tabBarActiveTintColor: '#121212',

                tabBarStyle: {
                    backgroundColor: '#FFF', //função pra mudar a cor menu navegação
                    borderTopWidth: 0 //função pra tirar a borda do topo menu navegação
                }
            }}
        >
            <Tab.Screen
                name="homeTab"
                component={Home}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                          if(focused){ 
                            return <Ionicons name="home" color="#000" size={size} /> //Se usuario estiver na pagina home app vai carregar essa config
                          }
                          return  <Ionicons name="home-outline" color={color} size={size} /> //Caso usuario não esteja tabBar vai ser diferente
                    }
                }}
            />

            <Tab.Screen
                name="favorites"
                component={Favorites}
                 options={{
                    tabBarIcon: ({color,size, focused}) => {
                     if(focused){
                        return <Ionicons name="heart" color="#FF4141" size={size}/>
                     }
                     return <Ionicons name="heart-outline" color={color} size={size}/>
                    }
                 }}
                />

                
        </Tab.Navigator>
    );
}