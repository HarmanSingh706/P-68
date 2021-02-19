import React,{Component} from 'react'
import { StyleSheet, Text, View,Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Instagram from './screens/Instagram'
import Facebook from './screens/Facebook'

export default class App extends Component{
      render(){
        return(
 <SafeAreaProvider>
  <AppContainer/>
 </SafeAreaProvider>
  )
}
}
const TabNavigator = createBottomTabNavigator({
  Facebook : { screen: Facebook },
   Instagram: { screen: Instagram }
 },
 {
   defaultNavigationOptions:({navigation})=>({
     tabBarIcon:()=>{
       const routeName = navigation.state.routeName
       if (routeName=='Instagram'){
         return(
           <Image source={require ("./assets/instagram.png")}
           style={{width:30,height:30}}/>
         )
       } else if (routeName=='Facebook'){
         return(
           <Image source={require ("./assets/facebook.png")}
           style={{width:30,height:30}}/>
         )
       }
     }
   })
 }
 
 );
 
 const AppContainer = createAppContainer(TabNavigator);


