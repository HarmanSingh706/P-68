import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Instagram extends Component{
    render(){
        return(
            <View>
                <Text style={styles.instagramText}>Instagram.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    instagramText:{
        alignSelf:'center',
        color:'#800080',
        fontSize:50
    }
})