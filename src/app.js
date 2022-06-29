import  React,{Componment} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default class Anylink extends React {
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.text} >
                    <Text> Github link (ask issues there)</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        color : '#2a2e35',
    }
})