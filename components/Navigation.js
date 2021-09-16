import React from 'react';

// Navigation Components

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IonicIcon from 'react-native-vector-icons/Ionicons';

import {Dimensions} from 'react-native';

// Import screens

import Principal from '../screens/Principal';
import Formulario from '../screens/Formulario';
import Perfil from '../screens/Perfil';

//Header
import Header from './header';

//Animation

const fullScreenWidth = Dimensions.get('window').width

const Stack = createNativeStackNavigator()


function PrincipalStackScreen( ){
    return (
        

        <Stack.Navigator>
            <Stack.Screen name="Principal" component= {Principal}
                options={{
                    headerTitle: () => <Header/>
                  }}
                  />
        </Stack.Navigator>
    );
}

function FormularioStackScreen( ){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Formulario" component= {Formulario}
                  options={{
                    headerTitle: () => <Header/>
                  }}
            />
            <Stack.Screen name="Perfil" component= {Perfil}/>
        </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

export default function Navigation(props) {
    return(
       <NavigationContainer>
           <Tab.Navigator
           screenOptions= {({route}) => ({
              headerShown: false,
                "tabBarActiveTintColor": "lightseagreen",
                "tabBarInactiveTintColor": "grey",
                tabBarIconStyle:{
                    "marginTop":15,
                    "margiBottom":15
                },
                "tabBarLabelStyle": {
                  "fontSize": 16
                },
                "tabBarStyle": [
                  {
                    "display": "flex"
                  },
                  null
                ]
              ,
               tabBarIcon: ({focused, color, size, padding}) => {
                   let iconName;
                   if(route.name === 'Inicio') {
                       iconName = focused ? 'finger-print' : 'finger-print-outline';
                   } else if (route.name === 'Form') {
                       iconName = focused ? 'flask' : 'flask-outline';
                   }

                   return (
                       <IonicIcon 
                       name={iconName} 
                       size={size} 
                       color ={color} 
                       style={{paddingBottom: padding}}
                       />
                   );
                 },
                })
            
            }
              >

               <Tab.Screen name="Inicio" component={PrincipalStackScreen} />
               <Tab.Screen name="Form" component={FormularioStackScreen} />
           </Tab.Navigator>
       </NavigationContainer> 
    )
}