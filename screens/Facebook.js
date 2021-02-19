import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Facebook extends Component{
    render(){
        return(
            <View>
                <Text style={styles.facebookText}>Facebook.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    facebookText:{
        alignSelf:'center',
        color:'#800080',
        fontSize:50
    }
})