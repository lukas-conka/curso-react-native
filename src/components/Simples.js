import React from 'react'
import {Text, View} from 'react-native'
import Padrao from '../estilo/Padrao'

export default (props) => {
    return (
    <View style={Padrao.container}>
        <Text style={Padrao.ex}>Arrow Function: {
            props.texto
        }</Text>
    </View>
    )
}
