import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Padrao from '../estilo/Padrao'

export default (props) => {
    return <Text style={Padrao.ex}>Arrow Function: {
        props.texto
    }</Text>
}
